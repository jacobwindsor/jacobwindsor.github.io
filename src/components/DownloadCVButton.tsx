import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { generateCV } from '@/lib/generateCV';

export function DownloadCVButton() {
  const handleDownload = () => {
    generateCV();
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="inline-flex items-center gap-2 text-xs font-medium"
      onClick={handleDownload}
    >
      <Download className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Download CV</span>
      <span className="inline sm:hidden">CV</span>
    </Button>
  );
}
