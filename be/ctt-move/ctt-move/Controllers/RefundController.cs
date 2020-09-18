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
    [Route("api/refund")]
    [ApiController]
    public class RefundController : ControllerBase
    {

        private RefundService refundService;

        public RefundController ()
        {
            this.refundService = new RefundService();
        }

        [HttpPost("refund")]
        [Authorize]
        public IActionResult createRefund ([FromBody] Refund refund)
        {
            refundService.createRefund(refund);

            return Ok();
        }

    }
}
