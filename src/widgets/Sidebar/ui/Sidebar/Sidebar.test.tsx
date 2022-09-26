import { fireEvent, screen } from '@testing-library/react';
import { RenderWithTranslation } from 'shared/lib/tests/RenderWithTranslation/RenderWithTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('In the document', () => {
    RenderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Toggle', () => {
    RenderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
