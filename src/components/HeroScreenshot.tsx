"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

export function HeroScreenshot() {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-[calc(100%-1.5rem)] bg-background flex flex-col items-center justify-center text-center p-6">
      {!hasError && (
        <div className="absolute inset-0 z-0">
          <img 
            src="/screenshots/desktop-crm.png" 
            alt="Tensu Business Dashboard" 
            className="w-full h-full object-cover object-top"
            onError={() => setHasError(true)}
          />
        </div>
      )}
      
      {hasError && (
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
            <ImageIcon className="w-8 h-8 text-muted-foreground" />
          </div>
          <p className="text-sm font-bold text-foreground">Скриншот не найден</p>
          <p className="text-xs text-muted-foreground max-w-[250px]">
            Пожалуйста, сохраните отправленную картинку как <br/>
            <code className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded">desktop-crm.png</code><br/> 
            в папку <code className="text-primary font-mono bg-primary/10 px-1 py-0.5 rounded">public/screenshots/</code>
          </p>
        </div>
      )}
    </div>
  );
}
