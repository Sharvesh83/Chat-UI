import React, { useState } from 'react';

const contacts = [
    { id: 1, name: 'Alice Freeman', lastMessage: 'See you tomorrow!', time: '10:30 AM', unread: 2, avatar: 'https://ui-avatars.com/api/?name=Alice+Freeman&background=0D8ABC&color=fff' },
    { id: 2, name: 'Bob Smith', lastMessage: 'Can you send the file?', time: 'Yesterday', unread: 0, avatar: 'https://ui-avatars.com/api/?name=Bob+Smith&background=fcbf49&color=fff' },
    { id: 3, name: 'Charlie Brown', lastMessage: 'Thanks!', time: 'Yesterday', unread: 0, avatar: 'https://ui-avatars.com/api/?name=Charlie+Brown&background=ef476f&color=fff' },
    { id: 4, name: 'David Lee', lastMessage: 'Meeting rescheduled', time: 'Mon', unread: 1, avatar: 'https://ui-avatars.com/api/?name=David+Lee&background=06d6a0&color=fff' },
    { id: 5, name: 'Emma Wilson', lastMessage: 'Great idea!', time: 'Mon', unread: 0, avatar: 'https://ui-avatars.com/api/?name=Emma+Wilson&background=118ab2&color=fff' },
];

function Sidebar() {
    const [activeContact, setActiveContact] = useState(1);

    return (
        <div className="w-80 h-full border-r border-gray-200 bg-white flex flex-col">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Messages</h2>
                <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                </button>
            </div>

            <div className="p-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search messages..."
                        className="w-full bg-gray-100 text-gray-700 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all font-medium placeholder-gray-400"
                    />
                    <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                {contacts.map((contact) => (
                    <div
                        key={contact.id}
                        onClick={() => setActiveContact(contact.id)}
                        className={`flex items-center p-4 cursor-pointer transition-colors hover:bg-slate-50 ${activeContact === contact.id ? 'bg-primary-50 border-r-4 border-primary-500' : ''}`}
                    >
                        <div className="relative">
                            <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div className="ml-4 flex-1">
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className={`text-sm font-semibold ${activeContact === contact.id ? 'text-primary-900' : 'text-gray-800'}`}>{contact.name}</h3>
                                <span className={`text-xs ${activeContact === contact.id ? 'text-primary-600' : 'text-gray-400'}`}>{contact.time}</span>
                            </div>
                            <p className={`text-sm truncate select-none ${activeContact === contact.id ? 'text-primary-700' : 'text-gray-500'} ${contact.unread > 0 ? 'font-semibold' : ''}`}>
                                {contact.lastMessage}
                            </p>
                        </div>
                        {contact.unread > 0 && (
                            <div className="ml-2 w-5 h-5 bg-primary-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">{contact.unread}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
