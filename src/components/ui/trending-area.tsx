import { TredingItem, TredingItemSkeleton } from "./trending-item";

export const TrendingArea = () => {
    return(
        <div className="bg-gray-700 rounded-3xl">
            <h2 className="text-xl p-6">O que está acontecendo</h2>
            <div className="flex flex-col gap-4 p-6 pt-0">
                <TredingItem
                label="#Ola mundo"
                count={1293}
                />
                <TredingItem
                label="#Ola mundo"
                count={1293}
                />
                <TredingItemSkeleton/>
                <TredingItemSkeleton/>
            </div>
        </div>
    );
}