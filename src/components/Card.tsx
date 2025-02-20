import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";

const cardStyles = {
  root: {
    width: 350,
  },
  media: {
    objectFit: "contain",
    width: 200,
    margin: "0 auto",
  },
  description: {
    color: "text.secondary",
  },
};

interface CardProps {
  title: string;
  link: string;
  alt: string;
  description: string;
  image: string;
  actions?: { label: string; onClick: () => void }[];
}

export const Card = ({
  title,
  link,
  alt = "",
  description,
  image,
  actions = [],
}: CardProps) => {
  return (
    <MuiCard sx={cardStyles.root}>
      <CardMedia
        component="img"
        sx={cardStyles.media}
        image={image}
        alt={alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={cardStyles.description}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="inherit"
          component={Link}
          to={link}
          target="_blank"
        >
          See More
        </Button>
        {actions.map((action, index) => (
          <Button
            key={index}
            size="small"
            color="inherit"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        ))}
      </CardActions>
    </MuiCard>
  );
};
