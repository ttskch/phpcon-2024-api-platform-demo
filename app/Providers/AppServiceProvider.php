<?php

namespace App\Providers;

use ApiPlatform\State\ProcessorInterface;
use ApiPlatform\State\ProviderInterface;
use App\State\ArticlePublishProcessor;
use App\State\ArticleRandomProvider;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->tag([ArticleRandomProvider::class], ProviderInterface::class);
        $this->app->tag([ArticlePublishProcessor::class], ProcessorInterface::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
