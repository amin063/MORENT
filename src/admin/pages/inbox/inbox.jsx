import React, { useState } from 'react';

const Inbox = () => {
  // Mesajları ve filtre durumu saklamak için state kullanıyoruz
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filter, setFilter] = useState('all'); // 'all', 'unread', 'archived' gibi filtreler
  const [isNewMessageOpen, setIsNewMessageOpen] = useState(false);

  // Mesajlar
  const messages = [
    {
      id: 1,
      sender: 'John Doe',
      content: 'I have a question about the recent report.',
      time: '2 hours ago',
      isRead: false,
      isArchived: false,
    },
    {
      id: 2,
      sender: 'Jane Smith',
      content: 'Can you send me the updated schedule?',
      time: '3 hours ago',
      isRead: true,
      isArchived: false,
    },
    {
      id: 3,
      sender: 'Michael Brown',
      content: 'I need clarification on the budget proposal.',
      time: '5 hours ago',
      isRead: false,
      isArchived: true,
    },
    {
      id: 4,
      sender: 'Alice Baker',
      content: 'Can we schedule a call for next week?',
      time: '1 day ago',
      isRead: true,
      isArchived: false,
    },
  ];

  // Mesajı tıklayınca açma fonksiyonu
  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  // Filtrelemeyi yönetme fonksiyonu
  const filteredMessages = messages.filter((message) => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !message.isRead;
    if (filter === 'archived') return message.isArchived;
    return true;
  });

  // Yeni mesaj penceresini açma/kapama
  const handleNewMessageClick = () => {
    setIsNewMessageOpen(!isNewMessageOpen);
  };

  return (
    <div className="p-6 space-y-8">
      {/* Sayfa Başlığı */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Inbox</h1>
        <p className="text-gray-500 text-sm">Your recent messages and communications</p>
      </div>

      {/* Mesaj Filtreleme Butonları */}
      <div className="flex justify-start gap-6 mb-6">
        <button
          className={`bg-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-300 focus:outline-none ${filter === 'all' ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`bg-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-300 focus:outline-none ${filter === 'unread' ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => setFilter('unread')}
        >
          Unread
        </button>
        <button
          className={`bg-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-300 focus:outline-none ${filter === 'archived' ? 'bg-blue-600 text-white' : ''}`}
          onClick={() => setFilter('archived')}
        >
          Archived
        </button>
      </div>

      {/* Mesaj Listesi */}
      <div className="space-y-4">
        {filteredMessages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ${
              !message.isRead ? 'border-l-4 border-blue-600' : ''
            }`}
            onClick={() => handleMessageClick(message)} // Mesaja tıklanınca aç
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
              {message.sender.split(' ')[0].charAt(0)}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{message.sender}</h3>
              <p className="text-sm text-gray-600">{message.content}</p>
            </div>
            <div className="text-sm text-gray-400">{message.time}</div>
          </div>
        ))}
      </div>

      {/* Seçili Mesaj Detayı */}
      {selectedMessage && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Message Details</h2>
          <div className="text-lg text-gray-800">
            <strong>From:</strong> {selectedMessage.sender}
          </div>
          <div className="text-sm text-gray-600">{selectedMessage.time}</div>
          <div className="mt-4">
            <p className="text-gray-800">{selectedMessage.content}</p>
          </div>
        </div>
      )}

      {/* Yeni Mesaj Butonu */}
      <div className="fixed bottom-6 right-6">
        <button
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
          onClick={handleNewMessageClick}
        >
          <i className="fas fa-plus"></i>
        </button>
      </div>

      {/* Yeni Mesaj Penceresi */}
      {isNewMessageOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">New Message</h2>
            <input
              type="text"
              placeholder="Recipient"
              className="border border-gray-300 p-2 rounded-lg w-full mb-4"
            />
            <textarea
              placeholder="Message content"
              className="border border-gray-300 p-2 rounded-lg w-full mb-4"
              rows="4"
            ></textarea>
            <div className="flex justify-end gap-4">
              <button
                className="bg-gray-200 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-300 focus:outline-none"
                onClick={handleNewMessageClick} // Yeni mesaj penceresini kapat
              >
                Cancel
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 focus:outline-none">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
