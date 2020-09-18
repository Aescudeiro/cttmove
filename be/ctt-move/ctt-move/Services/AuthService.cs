﻿using cttMove.Models.DAL;
using cttMove.Models.Db;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace cttMove.Services
{
    public class AuthService
    {
        private const int saltSize = 16;
        private const int hashSize = 20;

        private AuthRepository _authRepository;

        public AuthService()
        {
            this._authRepository = new AuthRepository();
        }

        public CttUser login (string email, string password)
        {
            CttUser user = _authRepository.getUser(email);
            bool isPassCorrect = false;

            if (user != null)
            {
                isPassCorrect = verify(password, user.Pass);
            }

            return isPassCorrect ? user : null;
        }

        public bool registerNewEmail (string email, string password)
        {
            CttUser user = _authRepository.getUser(email);

            if (user != null)
            {
                return false;
            }

            string hashedPassword = hash(password);
            _authRepository.registerNewEmail(email, hashedPassword);

            return true;
        }

        public CttUser regsiterUserDetails (CttUser user)
        {
            return _authRepository.regsiterUserDetails(user);
        }

        //TODO: This should be a separate class. It's an utility service
        private string hash(string password, int iterations)
        {
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[saltSize]);

            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, iterations);
            var hash = pbkdf2.GetBytes(hashSize);

            var hashBytes = new byte[saltSize + hashSize];
            Array.Copy(salt, 0, hashBytes, 0, saltSize);
            Array.Copy(hash, 0, hashBytes, saltSize, hashSize);

            var base64Hash = Convert.ToBase64String(hashBytes);

            return string.Format("$MYHASH$V1${0}${1}", iterations, base64Hash);
        }

        private string hash(string password)
        {
            return hash(password, 10000);
        }

        private bool isHashSupported(string hashString)
        {
            return hashString.Contains("$MYHASH$V1$");
        }

        private bool verify(string password, string hashedPassword)
        {
            if (!isHashSupported(hashedPassword))
            {
                throw new NotSupportedException("The hashtype is not supported");
            }

            var splittedHashString = hashedPassword.Replace("$MYHASH$V1$", "").Split('$');
            var iterations = int.Parse(splittedHashString[0]);
            var base64Hash = splittedHashString[1];

            var hashBytes = Convert.FromBase64String(base64Hash);

            var salt = new byte[saltSize];
            Array.Copy(hashBytes, 0, salt, 0, saltSize);

            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, iterations);
            byte[] hash = pbkdf2.GetBytes(hashSize);

            for (var i = 0; i < hashSize; i++)
            {
                if (hashBytes[i + saltSize] != hash[i])
                {
                    return false;
                }
            }

            return true;
        }
    }
}