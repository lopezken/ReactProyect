import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
//import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
//import { red } from '@mui/material/colors';
//import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
//import { ClassNames } from '@emotion/react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            //className={classes.action}
            variant='h5'
            color='textSecondary'
          >
            {50}
          </Typography>
        }
        title="Surface Laptop Go" 
        subheader="Microsoft"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://m.media-amazon.com/images/I/61OvV27-44L._AC_SL1500_.jpg"
        alt="Laptop Go"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Pantalla táctil de 12.4 pulgadas - Intel Core i5 - Memoria de 8 GB - SSD de 256 GB - Platino
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='Add to Cart'>
          <AddShoppingCart fontSize='large'/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Sobre este artículo:</Typography>
          <Typography paragraph>
            Diseño elegante y valor destacado. Con tan solo 2.44 libras, es ligero, portátil y fácil de mantener a tu lado durante todo el día.
            Sé productivo, navega y haz un reloj en la pantalla táctil PixelSense de 12.4 pulgadas.
          </Typography>
          <Typography paragraph>
            Seguridad conveniente con el inicio de sesión de Windows Hola, además del botón de encendido de huellas dactilares con Windows Hello y One Touch para iniciar sesión en modelos seleccionados.
            Ejecuta tus aplicaciones favoritas y mantente al día en las redes sociales con un procesador Intel Core de 10ª generación.
            Muestra tu mejor lado en videollamadas, reuniones y reuniones virtuales con la cámara HD de 720p integrada.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );

}
