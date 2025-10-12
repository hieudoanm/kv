import { NAVBAR_LINKS, PageTemplate } from '@atomic/templates/PageTemplate';
import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <PageTemplate
      disabledSearch
      query={''}
      setState={() => {}}
      id="atomic/code"
      emoji="⚛️"
      title="atomic/code"
      description="A modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces.">
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-y-8 md:gap-y-16">
            <h2 className="text-center text-2xl font-extrabold md:text-3xl md:font-black">
              Supercharge your Web App with Atomic Code
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {NAVBAR_LINKS.map(
                ({ href = '', emoji = '', full = '', description = '' }) => {
                  return (
                    <div key={href} className="col-span-1">
                      <div className="flex flex-col gap-y-2 rounded-lg border border-neutral-200 bg-white/40 p-4 shadow dark:border-neutral-800 dark:bg-neutral-900/40 dark:shadow-neutral-100/10">
                        <Link href={href}>
                          <h2 className="text-center text-xl font-semibold">
                            {emoji}{' '}
                            <span className="border-b border-dotted">
                              {full}
                            </span>
                          </h2>
                        </Link>
                        <p className="mx-auto w-full max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-400">
                          {description}
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default HomePage;
