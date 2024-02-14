import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { ProfileWrapper } from "./styles";

export default function ProfileCard({ image, username, email, mobileNum }) {
  return (
    <ProfileWrapper>
      <Card className="profile-card">
        <CardMedia
          component="img"
          alt="profile"
          image={image}
          className="profile-image"
        />
        <CardContent sx={{ textAlign: "center", p: 0, pb: `${0} !important` }}>
          <Typography variant="h6" component="div" className="username">
            {username}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="email">
            {email}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="mobile">
            {mobileNum}
          </Typography>
        </CardContent>
      </Card>
    </ProfileWrapper>
  );
}
