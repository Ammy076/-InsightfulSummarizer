using Microsoft.AspNetCore.Mvc;
using InsightfulSummarizer.Models;
using InsightfulSummarizer.Services;

namespace InsightfulSummarizer.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SummarizerController : ControllerBase
    {
        private readonly SummarizerService _summarizerService;
        private readonly VectorSearchService _vectorSearchService;

        public SummarizerController(SummarizerService summarizerService, VectorSearchService vectorSearchService)
        {
            _summarizerService = summarizerService;
            _vectorSearchService = vectorSearchService;
        }

        [HttpPost("summarize")]
        public IActionResult Summarize(SummarizeRequest request)
        {
            var response = _summarizerService.Summarize(request);
            return Ok(response);
        }

        [HttpPost("search")]
        public IActionResult Search(SearchRequest request)
        {
            var response = _vectorSearchService.Search(request);
            return Ok(response);
        }
    }
}
