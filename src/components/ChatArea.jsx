import React from 'react';

const messages = [
    { id: 1, sender: 'Alice', text: 'Hey there! How is the project coming along?', time: '10:00 AM', isMe: false },
    { id: 2, sender: 'Me', text: 'Hi Alice! It is going great. I just finished the initial setup.', time: '10:05 AM', isMe: true },
    { id: 3, sender: 'Alice', text: 'That is awesome! Do you need any help with the UI?', time: '10:15 AM', isMe: false },
    { id: 4, sender: 'Me', text: 'I think I have got it covered. Using Tailwind CSS makes it really fast.', time: '10:20 AM', isMe: true },
    { id: 5, sender: 'Alice', text: 'Perfect. Let me know if you run into any issues. See you tomorrow!', time: '10:30 AM', isMe: false },
    { id: 6, sender: 'Me', text: 'Will do. Thanks!', time: '10:32 AM', isMe: true },
];

function ChatArea() {
    return (
        <div className="flex-1 flex flex-col bg-slate-50 relative overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="text-center text-xs text-gray-400 my-4">Today</div>
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}>
                        {!msg.isMe && (
                            <img src="https://ui-avatars.com/api/?name=Alice+Freeman&background=0D8ABC&color=fff" alt="Alice" className="w-8 h-8 rounded-full mr-3 mt-1 shadow-sm" />
                        )}
                        <div className={`max-w-[70%] rounded-2xl p-4 shadow-sm ${msg.isMe
                            ? 'bg-primary-600 text-white rounded-tr-none'
                            : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                            }`}>
                            <p className="text-sm leading-relaxed">{msg.text}</p>
                            <div className={`text-[10px] mt-1 text-right ${msg.isMe ? 'text-primary-100' : 'text-gray-400'}`}>
                                {msg.time}
                            </div>
                        </div>
                        {msg.isMe && (
                            <div className="w-8 h-8 ml-3 flex items-end justify-center">
                                {/* Placeholder for read receipt or own avatar if needed */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ChatArea;
