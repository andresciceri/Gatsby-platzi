import React, { useState, useContext } from 'react';
import priceFormat from '../utils/priceFormat';
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from '../styles/components';
import { SEO, Starts } from './';
import { CartContext } from '../context';
export default function productDetail({
  unit_amount: price,
  sku: id,
  product: { name, metadata },
}) {
  const formatePrice = priceFormat(price);
  const [size, setSize] = useState(2);
  const [qty, setQty] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleSubmit = () => {
    addToCart({ price, sku: id, name, metadata, quantity: qty });
  };
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formatePrice}</b>
        <Starts />
        {metadata.wear && <h3>Color: Azul</h3>}
        <small>{metadata.description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad: </p>
        <QtySelect>
          <Button onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>-</Button>
          <input type="text" disabled value={qty} />
          <Button onClick={() => setQty(qty + 1)}>+</Button>
        </QtySelect>
        <Button onClick={handleSubmit}>Agregar al Carrito</Button>
      </div>
    </StyledProductDetail>
  );
}
