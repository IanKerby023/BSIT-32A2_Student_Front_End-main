'use client';

import React from 'react';
import '@/app/styles/member.css';

type Member = {
  id: number;
  name: string;
  role: string;
  image: string;
};

const members: Member[] = [
  {
    id: 1,
    name: 'Aaron Nash Enriquez',
    role: 'UI/Front-end ',
    image: '/images/kerby.jpg',
  },
  {
    id: 2,
    name: 'John Kervie Balolong',
    role: 'Back-end/API',
    image: '/images/nadine.jpg',
  }
];

export default function MembersPage() {
  return (
    <div className="members-container">
      <h1 className="members-header">Meet the Team</h1>
      <div className="members-list">
        {members.map((member, index) => (
          <div className={`member-card position-${index + 1}`} key={member.id}>
            <img src={member.image} alt={member.name} className="member-image" />
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
