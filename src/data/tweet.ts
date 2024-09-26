import { Tweet } from "@/types/tweet";
import { user } from './user';

export const tweet: Tweet ={
    id: 123,
    user: user,
    body: 'Outro dia Magico',
    image: 'data:image/jpeg;base64,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',
    likeCount: 523,
    commentCount: 61,
    retweetCount: 0,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
}