import React, { useState, useEffect } from 'react';

interface PricingCardData {
    title: string;
    prices: number;
    billing: string;
    saveText: string;
    features: string[];
    comingSoonText: string;
    disclaimer: string[];
}


const PricingCard: React.FC = () => {
    const [data, setData] = useState<PricingCardData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Replace with your backend API URL
        const API_URL = `${window.location.origin}/api`;

        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result: PricingCardData = await response.json();
                setData(result);
            } catch (e: unknown) {
                if (e instanceof Error) {
                    setError(e.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="text-white text-center">Loading...</div>;
    if (error) return <div className="text-red-500 text-center">Error: {error}</div>;
    if (!data) return <div className="text-white text-center">No data available.</div>;

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-md relative p-8 bg-[#0f172b] text-white rounded-xl shadow-lg border border-purple-600">
                {data.title && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white text-xs font-bold px-4 whitespace-nowrap py-1 rounded-full uppercase">
                        {data.title}
                    </div>
                )}
                <div className="text-center mt-4">
                    <span className="text-5xl font-bold">${data.prices}</span>
                    <span className="text-lg font-light">{data.billing}</span>
                </div>
                <p className="text-center text-sm mt-1 mb-6 text-gray-300">
                    {data.saveText}
                </p>
                <div className="space-y-3">
                    {data.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-lg">
                            <span className="text-green-400 mr-2">✓</span>
                            {feature}
                        </div>
                    ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700 text-center">
                    <p className="text-gray-400 uppercase text-sm font-semibold">COMING SOON</p>
                    <p className="text-white mt-1">{data.comingSoonText}</p>
                </div>
                <button className="w-full mt-6 py-3 px-4 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors">
                    Signup Now
                </button>
                {data.disclaimer.map((disclaimer, index) => (
                    <p key={index} className="text-xs text-center mt-3 text-gray-400">
                        {disclaimer}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;