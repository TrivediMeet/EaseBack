import { Feedback } from "@/db/schema";

interface TableProps {
  data: Feedback[];
}

const Table = ({ data }: TableProps) => {
  return (
    <div className="mt-8">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Type</th>
            <th className="text-left p-4">Message</th>
            <th className="text-left p-4">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((feedback, i) => (
            <tr key={i} className="border-b">
              <td className="p-4">{feedback.type}</td>
              <td className="p-4">{feedback.message}</td>
              <td className="p-4">{new Date(feedback.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table; 