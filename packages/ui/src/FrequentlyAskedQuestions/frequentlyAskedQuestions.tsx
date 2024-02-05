import 'server-only';

/**
 * I am a server component
 */
export const FrequentlyAskedQuestions = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                    Frequently asked questions
                </h2>
                <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                    <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                            What&#039;s the best thing about Switzerland?
                        </dt>
                        <dd className="mt-4 lg:col-span-7 lg:mt-0">
                            <p className="text-base leading-7 text-gray-600">
                                I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas cupiditate laboriosam fugiat.
                            </p>
                        </dd>
                    </div>

                    <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                            What do you call someone with no body and no nose?
                        </dt>
                        <dd className="mt-4 lg:col-span-7 lg:mt-0">
                            <p className="text-base leading-7 text-gray-600">
                                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas
                                ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    );
};
