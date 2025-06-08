export interface BuildOptions {
    port: number;
    mode: BuildMode;
    paths: BuildPaths;
    analyzer: boolean;
}

export interface BuildPaths {
    entry: string;
    output: string;
    public: {
        html: string;
        favicon: string;
    }
    src: string;
}

export type BuildMode = 'development' | 'production';