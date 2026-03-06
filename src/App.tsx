import React, { useState } from 'react';
import VersionNavy from './versions/VersionNavy';
import VersionCoderixOld from './versions/VersionCoderixOld';
import VersionCoderixNew from './versions/VersionCoderixNew';

export default function App() {
  const [version, setVersion] = useState<'navy' | 'coderixOld' | 'coderixNew'>('coderixOld');

  return (
    <>
      {version === 'navy' && <VersionNavy />}
      {version === 'coderixOld' && <VersionCoderixOld />}
      {version === 'coderixNew' && <VersionCoderixNew />}
    </>
  );
}
