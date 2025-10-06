import Calendar from "@/components/cards/Calendar";
import DataTable from "@/components/cards/DataTable";
import General from "@/components/cards/General";
import Lines from "@/components/cards/Lines";
import Table from "@/components/cards/Table";

export default function Home() {
  return (
    <div className="grid gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
        <General />
        <div className="grid gap-5">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Lines />
        <Table />
        <DataTable />
      </div>
    </div>
  );
}
