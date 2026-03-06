import React, { useState } from 'react';
import VersionNavy from './versions/VersionNavy';
import VersionCoderixOld from './versions/VersionCoderixOld';
import VersionCoderixNew from './versions/VersionCoderixNew';
import { Layers } from 'lucide-react';

export default function App() {
  const [version, setVersion] = useState<'navy' | 'coderixOld' | 'coderixNew'>('coderixOld');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {version === 'navy' && <VersionNavy />}
      {version === 'coderixOld' && <VersionCoderixOld />}
      {version === 'coderixNew' && <VersionCoderixNew />}

      {/* Floating Panel */}
      <div className="fixed top-24 right-6 z-[9999] flex flex-col items-end">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white text-black px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 font-bold border border-gray-200"
        >
          <Layers size={20} />
          {isOpen ? '패널 닫기' : '버전 히스토리 보기'}
        </button>
        
        {isOpen && (
          <div className="mt-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex flex-col gap-2 w-72 border border-gray-200">
            <p className="text-sm font-bold text-gray-500 mb-2 px-2">디자인/카피 버전 선택</p>
            <button 
              onClick={() => { setVersion('navy'); setIsOpen(false); }}
              className={`text-left px-4 py-3 rounded-xl font-bold transition-colors ${version === 'navy' ? 'bg-blue-900 text-white' : 'hover:bg-gray-100 text-gray-800'}`}
            >
              1. 다크 네이비 (초기)
            </button>
            <button 
              onClick={() => { setVersion('coderixOld'); setIsOpen(false); }}
              className={`text-left px-4 py-3 rounded-xl font-bold transition-colors ${version === 'coderixOld' ? 'bg-pink-600 text-white' : 'hover:bg-gray-100 text-gray-800'}`}
            >
              2. 코드릭스 스타일 (이전 카피)
            </button>
            <button 
              onClick={() => { setVersion('coderixNew'); setIsOpen(false); }}
              className={`text-left px-4 py-3 rounded-xl font-bold transition-colors ${version === 'coderixNew' ? 'bg-black text-white' : 'hover:bg-gray-100 text-gray-800'}`}
            >
              3. 코드릭스 스타일 (최신 카피)
            </button>
          </div>
        )}
      </div>
    </>
  );
}
