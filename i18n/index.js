import projects_en from '@/i18n/en/projects.json';
import projects_zh from '@/i18n/zh/projects.json';
import common_en from '@/i18n/en/common.json';
import common_zh from '@/i18n/zh/common.json';
import works_en from '@/i18n/en/works.json';
import works_zh from '@/i18n/zh/works.json';
import tags_en from '@/i18n/en/tags.json';
import tags_zh from '@/i18n/zh/tags.json';
import skills_data from '@/i18n/skills.json';

export const locales = ['en', 'zh-TW'];

export const skills = skills_data;

export const projects = {
    en: projects_en,
    'zh-TW': projects_zh
}

export const common = {
    en: common_en,
    'zh-TW': common_zh
}

export const works = {
    en: works_en,
    'zh-TW': works_zh
}

export const tags = {
    en: tags_en,
    'zh-TW': tags_zh
}