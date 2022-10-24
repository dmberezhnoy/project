import { fireEvent, screen } from '@testing-library/react';

import { ComponentRender } from 'shared/lib/tests/ComponentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('In the document', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Toggle', () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
