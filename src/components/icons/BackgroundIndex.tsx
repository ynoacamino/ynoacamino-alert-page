import { cn } from '@/lib/utils';

export function BackgroundIndex({ className = '' }: { className?: string }) {
  return (
    <svg className={cn('text-zinc-400 dark:text-[#a09bbb]', className)} width="669" height="780" viewBox="0 0 669 780" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M399 489V764L426.5 750.25L454 764L481.5 750.25L509 764L536.5 750.25L564 764L591.5 750.25L619 764V489L591.5 502.75L564 489L536.5 502.75L509 489L481.5 502.75L454 489L426.5 502.75L399 489Z" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M536.5 571.5H454" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M564 626.5H454" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M522.75 681.5H454" stroke="#currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M141 23V298L168.5 284.25L196 298L223.5 284.25L251 298L278.5 284.25L306 298L333.5 284.25L361 298V23L333.5 36.75L306 23L278.5 36.75L251 23L223.5 36.75L196 23L168.5 36.75L141 23Z" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M278.5 105.5H196" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M306 160.5H196" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M264.75 215.5H196" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 434V709L58.5 695.25L86 709L113.5 695.25L141 709L168.5 695.25L196 709L223.5 695.25L251 709V434L223.5 447.75L196 434L168.5 447.75L141 434L113.5 447.75L86 434L58.5 447.75L31 434Z" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M168.5 516.5H86" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M196 571.5H86" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M154.75 626.5H86" stroke="currentColor" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
      <mask id="mask0_13_23" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="154" y="124" width="515" height="516">
        <path d="M669 124.5H154V639.5H669V124.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_13_23)">
        <path d="M656 382C656 517.034 546.534 626.5 411.5 626.5C276.466 626.5 167 517.034 167 382C167 246.966 276.466 137.5 411.5 137.5C546.534 137.5 656 246.966 656 382Z" className="fill-background" stroke="currentColor" strokeWidth="26" />
        <path d="M433.379 183.405C433.379 171.322 423.583 161.526 411.5 161.526C399.417 161.526 389.621 171.322 389.621 183.405V382C389.621 394.083 399.417 403.879 411.5 403.879C423.583 403.879 433.379 394.083 433.379 382V183.405Z" fill="currentColor" id="min" />
        <path d="M515.846 360.121H411.5C399.417 360.121 389.621 369.917 389.621 382C389.621 394.083 399.417 403.879 411.5 403.879H515.846C527.93 403.879 537.725 394.083 537.725 382C537.725 369.917 527.93 360.121 515.846 360.121Z" fill="currentColor" id="hour" />
      </g>
    </svg>

  );
}
