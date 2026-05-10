import React, { forwardRef } from 'react';
import Image from "next/image";
import Badge from "@/components/badge/Badge";
import DecryptedText from "@/components/text/DecryptedText";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    bgImage: string;
    previewImage?: string;
    category: string;
    title: string;
    year: string;
    tags?: string[];
    videoElement?: React.ReactNode;
    className?: string;
    href?: string;
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({
    bgImage,
    previewImage,
    category,
    title,
    year,
    tags = ["Development"],
    videoElement,
    className,
    href,
}: ProjectCardProps, ref) => {
    const titleNode = (
        <DecryptedText
            once={false}
            stagger={48}
            duration={330}
            scrambleSpeed={34}
            className="block text-[clamp(27px,2.5vw,43px)] font-semibold leading-none tracking-tighter"
        >
            {title}
        </DecryptedText>
    );
    return (
        <div className={cn("space-y-2", className)}>
            {/* 卡片容器 */}
            <div
                ref={ref}
                className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md p-7 sm:p-9 xl:p-18"
            >

                {/* 背景图 */}
                <img
                    src={bgImage}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-in-out"
                />

                {/* 视频/内容容器 */}
                <div className="relative z-10 w-full overflow-hidden rounded-2xl shadow-2xl bg-[#f8f8f8]">
                    {videoElement ? (
                        videoElement
                    ) : previewImage ? (
                        <Image
                            src={previewImage}
                            alt={title}
                            width={1600}
                            height={900}
                            className="w-full h-auto object-contain"
                        />
                    ) : (
                        <div className="w-full aspect-[16/9] bg-gradient-to-br from-slate-200 to-slate-300 flex items-end p-4">
                            <span className="text-xs font-mono text-slate-500 opacity-60">screenshot coming soon</span>
                        </div>
                    )}
                </div>
            </div>

            {/* 底部信息 */}
            <div className="flex flex-col justify-between gap-y-4 lg:flex-row">

                {/* 左侧标题区 */}
                <div className="flex flex-col gap-y-2">
                    <DecryptedText
                        once={false}
                        stagger={48}
                        duration={330}
                        scrambleSpeed={34}
                        className="block font-mono font-medium text-secondary-foreground/70 tracking-tight leading-none uppercase"
                    >
                        {category}
                    </DecryptedText>
                    {href ? (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-opacity hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none"
                            aria-label={`${title} (opens GitHub repository in a new tab)`}
                        >
                            {titleNode}
                        </a>
                    ) : (
                        titleNode
                    )}
                </div>

                {/* 右侧标签区 */}
                <div className="flex items-end gap-x-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                            {tag}
                        </Badge>
                    ))}
                    <Badge variant="filled">
                        {year}
                    </Badge>
                </div>
            </div>
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;