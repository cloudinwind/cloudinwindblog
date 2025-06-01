import { defineNotesConfig, defineNoteConfig } from 'vuepress-theme-plume'
import FeynmanIII from './feynman-iii.ts'
import Integral from './integral.ts'
import cosmos from './cosmos.ts'
import writing from './writing.ts'
import review from './review.ts'
import project from './project.ts'
import baoyan from './baoyan.ts'

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [
    review,
    project,
    baoyan,
  ]
})