import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ExtraData({ userDatas }) {
  return (
    <>
      {userDatas ? (
        <CardContent sx={{ pb: `${0} !important` }}>
          {userDatas.map((data) => {
            return (
              <div key={data.title} style={{ marginBottom: "6%" }}>
                <Typography
                  variant="h6"
                  component="h6"
                  sx={{ fontSize: "1rem" }}
                >
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.description}
                </Typography>
              </div>
            );
          })}
        </CardContent>
      ) : null}
    </>
  );
}
