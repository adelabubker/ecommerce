export interface AboutFeatureViewModel {
  readonly title: string;
  readonly description: string;
}

export interface TeamMemberViewModel {
  readonly name: string;
  readonly role: string;
}

export interface AboutContentViewModel {
  readonly introTitle: string;
  readonly introDescription: string;
  readonly introImageUrl: string;
  readonly storyTitle: string;
  readonly storyDescription: string;
  readonly storyImageUrl: string;
  readonly features: AboutFeatureViewModel[];
  readonly teamMembers: TeamMemberViewModel[];
}