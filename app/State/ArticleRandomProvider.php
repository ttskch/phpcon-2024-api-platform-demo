<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProviderInterface;
use App\Models\Article;

final readonly class ArticleRandomProvider implements ProviderInterface
{
    public function provide(Operation $operation, array $uriVariables = [], array $context = []): object|array|null
    {
        if ($operation->getClass() !== Article::class) {
            throw new \InvalidArgumentException('このカスタムState ProviderはArticleモデルに対してのみ使用可能です。');
        }

        return Article::inRandomOrder()->first();
    }
}
