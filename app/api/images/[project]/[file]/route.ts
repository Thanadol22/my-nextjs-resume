import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request, { params }: { params: Promise<{ project: string; file: string }> }) {
  const resolvedParams = await params;
  const { project, file } = resolvedParams;
  
  const filePath = path.join(process.cwd(), 'assets', project, file);
  
  try {
    if (!fs.existsSync(filePath)) {
      return new NextResponse('File not found', { status: 404 });
    }
    
    const fileBuffer = fs.readFileSync(filePath);
    
    // Determine content type
    let contentType = 'image/jpeg'; // default to jpg
    const ext = file.toLowerCase().split('.').pop();
    if (ext === 'png') contentType = 'image/png';
    else if (ext === 'gif') contentType = 'image/gif';
    else if (ext === 'webp') contentType = 'image/webp';
    else if (ext === 'svg') contentType = 'image/svg+xml';
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
