// app/your-summaries/page.tsx
import { currentUser } from "@clerk/nextjs/server";
import { getUserSummaries } from "@/lib/queries";

export default async function YourSummariesPage() {
  const user = await currentUser();
  if (!user) return <div>Please log in to see your summaries.</div>;

  const email = user.emailAddresses[0].emailAddress;
  const summaries = await getUserSummaries(email);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Your Summaries</h1>
      {summaries.length === 0 ? (
        <p>No summaries found.</p>
      ) : (
        summaries.map((summary) => (
          <div
            key={summary.id}
            className="mb-6 p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <h2 className="text-lg font-semibold">{summary.title}</h2>
            <p className="text-gray-600 whitespace-pre-line mt-2">
              {summary.content}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              Created on: {new Date(summary.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
