'use client';

import { ProductCard } from '@monorepo/ui';

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
              title="test card"
              description="this is the test card component"
              price={200}
              onActionClick={() => console.log('Action Button Clicked')}
              actionText="confirm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
