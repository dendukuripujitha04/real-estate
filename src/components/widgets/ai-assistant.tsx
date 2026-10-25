'use client';

import React, { useState, useRef, useEffect } from 'react';
import { postAiChatApi } from '@/services/api';
import { AiChatMessage } from '@/types';
import { COMPANY_CONTACT } from '@/constants';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: (service?: string) => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({
  isOpen,
  onClose,
  onOpenConsultation,
}) => {
  const [messages, setMessages] = useState<AiChatMessage[]>([
    {
      sender: 'bot',
      text: 'Namaste! Welcome to SS Global Constructions and Interior Works. How can I assist you with your construction, villa, or interior project in Vijayawada?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleAction = (action: string) => {
    if (action === 'scroll_projects') {
      onClose();
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action === 'open_consultation') {
      onClose();
      onOpenConsultation('AI Assistant Consultation');
    } else if (action === 'call_phone') {
      window.location.href = `tel:${COMPANY_CONTACT.phoneRaw}`;
    }
  };

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    setMessages((prev) => [...prev, { sender: 'user', text: query }]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const data = await postAiChatApi(query);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: data.reply || 'Thank you for reaching out to SS Global Constructions.',
          actions: data.suggestedActions,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: `For direct civil and interior guidance, please call our Vijayawada office directly at ${COMPANY_CONTACT.phone}.`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="ai-chat-window open" id="ai-chat-window">
      <div className="ai-header">
        <div className="ai-title-row">
          <div className="ai-avatar">
            <img src="/logo.png" alt="SS Logo" style={{ width: '28px', height: '28px', borderRadius: '50%' }} />
          </div>
          <div>
            <div className="ai-name">SS Global Assistant</div>
            <div className="ai-status">Online • Vijayawada Desk</div>
          </div>
        </div>
        <button
          className="ai-close-btn"
          id="ai-close-btn"
          aria-label="Close AI chat"
          onClick={onClose}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>

      <div className="ai-messages-body" id="ai-messages-body">
        {messages.map((m, idx) => (
          <div key={idx} className={`ai-msg ${m.sender}`}>
            {m.text}

            {idx === 0 && (
              <div className="ai-quick-pills">
                <button
                  className="ai-pill"
                  onClick={() => handleSend('What services do you provide?')}
                >
                  Our Services
                </button>
                <button
                  className="ai-pill"
                  onClick={() => handleSend('Tell me about your 20+ years experience')}
                >
                  20+ Yrs Experience
                </button>
                <button
                  className="ai-pill"
                  onClick={() => handleSend('What brands of cement and steel do you use?')}
                >
                  Brands Used
                </button>
                <button
                  className="ai-pill"
                  onClick={() => handleSend('Where is your office in Vijayawada?')}
                >
                  Office Address
                </button>
              </div>
            )}

            {m.actions && m.actions.length > 0 && (
              <div className="ai-quick-pills">
                {m.actions.map((act, actIdx) => (
                  <button
                    key={actIdx}
                    className="ai-pill"
                    onClick={() => handleAction(act.action)}
                  >
                    {act.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="ai-msg bot" id="ai-typing-indicator">
            <em>Consulting SS Global engineering knowledge base...</em>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="ai-input-bar">
        <input
          ref={inputRef}
          type="text"
          id="ai-user-input"
          placeholder="Ask about construction, interiors, Vasthu, etc..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="ai-send-btn"
          id="ai-send-btn"
          aria-label="Send message"
          onClick={() => handleSend()}
        >
          <i className="fa fa-paper-plane"></i>
        </button>
      </div>
    </div>
  );
};
