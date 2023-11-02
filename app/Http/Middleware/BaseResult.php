<?php

namespace App\Http\Middleware;

use App\Http\Responses\CustomResponse;
use Closure;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Echo_;
use Symfony\Component\HttpFoundation\Response;

class BaseResult
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);
        $data = $response->getContent();

        $context =  new CustomResponse(json_decode($data));
        $statusCode = $response->getStatusCode();
        $context->setStatus($statusCode);
        if ($data === "[]" or empty($data)) {
            $context->setStatus(404);
        }

        $response->setContent($context->_toString());
        
        return $response;
    }
}
