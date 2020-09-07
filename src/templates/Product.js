import React from 'react';
import { ProductDetail } from '../components';

export default function Product({ pageContext }) {
  console.log({ ...pageContext });
  return <ProductDetail {...pageContext} />;
}
