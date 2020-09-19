using cttMove.Models.Db;
using cttMove.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cttMove.Controllers
{
    [Route("api/document")]
    [ApiController]
    [Authorize]
    public class DocumentController : ControllerBase
    {
        private DocumentService documentService;

        public DocumentController()
        {
            this.documentService = new DocumentService();
        }

        [HttpPost("document")]
        public IActionResult createDocument ([FromBody] Document document)
        {
            return Ok();
        }
    }
}
