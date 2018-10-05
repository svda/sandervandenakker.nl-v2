import * as React from 'react';

const Section: React.StatelessComponent<{ className?: string }> = ({ children, className }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default Section;