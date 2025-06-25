'use client';

import Image from 'next/image';

export default function TeamSection() {
  const team = [
    {
      name: 'Nate Rivers',
      role: 'Founder & Lead Dev',
      img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=300&q=60',
    },
    {
      name: 'Sasha Patel',
      role: 'UX Strategist',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=60',
    },
    {
      name: 'Miguel Alvarez',
      role: 'Automation Specialist',
      img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=60',
    },
  ];

  return (
    <section className="bg-gray-50 px-[clamp(1rem,4vw,3rem)] py-[clamp(5rem,10vw,8rem)] text-black">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold">Meet the Team</h2>
        <p className="text-[clamp(0.9rem,1.6vw,1.125rem)] text-gray-700">
          A lean crew of web veterans.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="space-y-2">
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={300}
                className="mx-auto rounded-full object-cover"
              />
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
