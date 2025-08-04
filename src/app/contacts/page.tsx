'use client';
import { useState } from 'react';

export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async () => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, mensagem }),
    });

    if (res.ok) setEnviado(true);
    else alert('Erro ao enviar mensagem');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Formulário de Contato</h1>
      <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
      <br />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <textarea placeholder="Mensagem" value={mensagem} onChange={e => setMensagem(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Enviar</button>

      {enviado && <p>Mensagem enviada com sucesso!</p>}
    </div>
  );
}
