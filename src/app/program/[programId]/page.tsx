import React from 'react';

type PlanPageProps = {
  params: {
    programId: string;
  };
};

const ArticlePage: React.FC<PlanPageProps> = ({ params: { programId } }) => {
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-start p-10">
      <h1>Plan Page</h1>
      <p>Plan ID: {programId}</p>
    </main>
  );
};

export default ArticlePage;
