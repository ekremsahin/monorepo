'use client';

import { ProductModel } from '@monorepo/types';
import { ProductCard } from '@monorepo/ui';

const DUMMY_PRODUCT: ProductModel = {
  id: 'mockId',
  title: 'Customer Card',
  description: 'this is the best pruduct',
  price: 200,
  stockCount: 10,
};

export default function Index() {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome @monorepo/monorepo-frontend 👋
            </h1>
            <ProductCard
              title={DUMMY_PRODUCT.title}
              description={DUMMY_PRODUCT.description}
              price={DUMMY_PRODUCT.price}
              stockCount={DUMMY_PRODUCT.stockCount}
              onActionClick={() => console.log('Action Button Clicked')}
              actionText="confirm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
