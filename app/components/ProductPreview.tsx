"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ShoppingCart, Eye } from "lucide-react"
import GreyPlaceholder from "@/components/grey-placeholder"

interface ProductPreviewProps {
  title: string
  description: string
  price: string
  originalPrice?: string
  rating?: number
  reviews?: number
  badge?: string
  imageUrl?: string
  onAddToCart?: () => void
  onViewDetails?: () => void
  onToggleFavorite?: () => void
  isFavorite?: boolean
}

export default function ProductPreview({
  title,
  description,
  price,
  originalPrice,
  rating = 0,
  reviews = 0,
  badge,
  imageUrl,
  onAddToCart,
  onViewDetails,
  onToggleFavorite,
  isFavorite = false
}: ProductPreviewProps) {
  return (
    <Card className="group relative overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
      {badge && (
        <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">
          {badge}
        </Badge>
      )}
      
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <GreyPlaceholder
              width="100%"
              height="100%"
              className="w-full h-full"
              alt={`${title} preview`}
            />
          )}
        </div>
        
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
            onClick={onToggleFavorite}
          >
            <Heart 
              className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
            onClick={onViewDetails}
          >
            <Eye className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {description}
        </p>

        {rating > 0 && (
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({reviews} reviews)
            </span>
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            className="flex-1" 
            onClick={onAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button 
            variant="outline" 
            onClick={onViewDetails}
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}