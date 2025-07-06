// import React from 'react';
import { cn } from '@/lib/utils';
// import { Card } from '@/components/new_comp/card';
import { Badge } from '@/components/new_comp/badge';
import { Button } from '@/components/buttons/button';

import football_arsenal from '@/assets/football_arsenal.png';
import football_barcelona from '@/assets/football_barcelona.png';
import football_vs_logo from '@/assets/football_vs_logo.png';
import info_outlined from '@/assets/info_outlined.png';
import icons_save_list from '@/assets/icons_save_list.png';

interface AiTipsCardProps {
  variant?: 'default' | 'detailed' | 'compact';
  showSaveIcon?: boolean;
  showConfidence?: boolean;
  showAiAnalysis?: boolean;
  showBettingOptions?: boolean;
  showAddToSlip?: boolean;
  className?: string;
  leagueTextColor?: string;
  teamLogoSize?: 'sm' | 'lg';
  height?: string;
}

export function AiTipsCard({
  variant = 'default',
  showSaveIcon = false,
  showConfidence = false,
  showAiAnalysis = true,
  showBettingOptions = false,
  showAddToSlip = false,
  className,
  leagueTextColor = 'text-white',
  teamLogoSize = 'lg',
}: AiTipsCardProps) {
  const teamLogoSizeClass = teamLogoSize === 'lg' ? 'h-[84px] w-[84px]' : 'h-[40px] w-[40px]';
  const vsLogoSizeClass = teamLogoSize === 'lg' ? 'h-[64px] w-[64px]' : 'h-[40px] w-[40px]';
  const bgColor = variant === 'default' ? 'bg-[#1a1b1e]' : 'bg-[#161818]';

  return (
    <div
      className={cn(
        'p-[1px] rounded-[12px] bg-gradient-to-b from-[#61F308BF] to-[#15B54BBF]',
        className,
      )}
    >
      <div className={cn('rounded-[11px] text-white h-full flex flex-col', bgColor)}>
        {variant === 'default' ? (
          <>
            <div className="bg-[#131416] px-4 py-3 rounded-t-[11px]">
              <p className="font-roboto_flex font-[450] text-[12px] leading-[20px] tracking-[0]">
                UEFA Champions League
              </p>
            </div>
            <div className="bg-[#161719] px-4 py-2 flex items-center justify-between">
              <p className="font-roboto_flex font-[450] text-[12px] leading-[20px] tracking-[0]">
                25.10.2024 - 20:00
              </p>
              <Badge variant="gradient" size="md">
                1.95 +
              </Badge>
            </div>
          </>
        ) : (
          <div className={cn('px-4 pt-6 flex items-center justify-between', leagueTextColor)}>
            <div>
              <p className="font-roboto_flex font-[450] text-[12px] leading-[20px] tracking-[0]">
                UEFA Champions League
              </p>
              <p className="font-roboto_flex font-[450] text-[12px] leading-[20px] tracking-[0]">
                25.10.2024 - 20:00
              </p>
            </div>
            <div className="flex items-center gap-2">
              {showConfidence && (
                <Badge variant="gradient" size="md">
                  High
                </Badge>
              )}
              {showSaveIcon && (
                <img src={icons_save_list} alt="Save" className="h-5 w-5 cursor-pointer" />
              )}
            </div>
          </div>
        )}

        <div className={cn('flex-1 px-4 py-2', variant === 'default' ? 'mt-2' : 'mt-5')}>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-3">
              <img src={football_arsenal} alt="Arsenal" className={teamLogoSizeClass} />
              <span className="font-roboto_flex font-semibold text-[14px] leading-[21px] tracking-[0]">
                Arsenal
              </span>
            </div>
            <img src={football_vs_logo} alt="VS" className={vsLogoSizeClass} />
            <div className="flex flex-col items-center gap-3">
              <img src={football_barcelona} alt="Barcelona" className={teamLogoSizeClass} />
              <span className="font-roboto_flex font-semibold text-[14px] leading-[21px] tracking-[0]">
                Barcelona
              </span>
            </div>
          </div>

          {showAiAnalysis && (
            <div className={cn('flex items-start gap-2', variant === 'detailed' ? 'mt-5' : 'mt-2')}>
              <img src={info_outlined} alt="Info" className="h-4 w-4 mt-1 flex-shrink-0" />
              <p className="font-roboto_flex font-[375] text-[12px] leading-[18px] tracking-[0] text-[#FFFFFFBF]">
                AI analysis suggests strong momentum for both teams, with recent performances
                indicating potential for high-scoring match.
              </p>
            </div>
          )}

          {showBettingOptions ? (
            <div className="mt-6 space-y-5">
              <div className="flex gap-2">
                <Button variant="gradientOutline" size="sm" className="flex-1">
                  1
                </Button>
                <Button variant="gradientOutline" size="sm" className="flex-1">
                  X
                </Button>
                <Button variant="gradientOutline" size="sm" className="flex-1">
                  2
                </Button>
              </div>
              {showAddToSlip && (
                <Button variant="gradient" className="w-full" rounded="full">
                  Add to Tip Slip +
                </Button>
              )}
            </div>
          ) : (
            <div className={cn('mt-5', variant === 'detailed' && 'mb-6')}>
              <div className="flex items-center justify-between">
                <p className="font-roboto_flex font-[450] text-[12px] leading-[18px] tracking-[0]">
                  BTTS & Over 2.5
                </p>
                <Badge variant="gradient" size="md">
                  1.95 +
                </Badge>
              </div>
              {showAddToSlip && (
                <Button variant="gradient" className="w-full mt-5" rounded="full">
                  Add to Tip Slip +
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Export aliases for backward compatibility
export { AiTipsCard as AITipsCard };
export { AiTipsCard as AiTipsCardAitTipsPage };
export { AiTipsCard as AiTipsCardTipsPage };
