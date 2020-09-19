using cttMove.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cttMove.Controllers
{
    [Route("api/auth")]
    [ApiController]
    [Authorize]
    public class DocumentController
    {
        private DocumentService documentService;

        public DocumentController()
        {
            this.documentService = new DocumentService();
        }
    }
}
