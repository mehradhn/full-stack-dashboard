import {
  Card,
  CardContent,
  useTheme,
  Typography,
  Rating,
  CardActions,
  Button,
  Collapse,
} from "@mui/material";
import { useState } from "react";
const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${price}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography varient="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="primary"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
          padding: "0.5rem",
        }}
      >
        <Typography>id: {_id}</Typography>
        <Typography>Supply Left: {supply}</Typography>
        <Typography>Yearly Sales This Year: {stat.yearlySalesTotal}</Typography>
        <Typography>
          Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
        </Typography>
      </Collapse>
    </Card>
  );
};

export default Product;