import Button from "~/components/Button";

function MenuItem({ data }) {
  return (
    <Button leftIcon={data.icon} data={data.to}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
