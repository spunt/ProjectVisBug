import { commands as blank_page_commands, default as BlankPagePlugin } from './blank-page'
import { commands as barrel_roll_commands, default as BarrelRollPlugin } from './barrel-roll'
import { commands as pesticide_commands, default as PesticidePlugin } from './pesticide'
import { commands as construct_commands, default as ConstructPlugin } from './construct'
import { commands as construct_debug_commands, default as ConstructDebugPlugin } from './construct.debug'
import { commands as wireframe_commands, default as WireframePlugin } from './wireframe'
import { commands as skeleton_commands, default as SkeletonPlugin } from './skeleton'
import { commands as tag_debugger_commands, default as TagDebuggerPlugin } from './tag-debugger'
import { commands as revenge_commands, default as RevengePlugin } from './revenge'

const commandsToHash = (plugin_commands, plugin_fn) =>
  plugin_commands.reduce((commands, command) =>
    Object.assign(commands, {[`/${command}`]:plugin_fn})
  , {})

export const PluginRegistry = new Map(Object.entries({
  ...commandsToHash(blank_page_commands, BlankPagePlugin),
  ...commandsToHash(barrel_roll_commands, BarrelRollPlugin),
  ...commandsToHash(pesticide_commands, PesticidePlugin),
  ...commandsToHash(construct_commands, ConstructPlugin),
  ...commandsToHash(construct_debug_commands, ConstructDebugPlugin),
  ...commandsToHash(wireframe_commands, WireframePlugin),
  ...commandsToHash(skeleton_commands, SkeletonPlugin),
  ...commandsToHash(tag_debugger_commands, TagDebuggerPlugin),
  ...commandsToHash(revenge_commands, RevengePlugin),
}))

export const PluginHints = [
  blank_page_commands[0],
  barrel_roll_commands[0],
  pesticide_commands[0],
  construct_commands[0],
  construct_debug_commands[0],
  wireframe_commands[0],
  skeleton_commands[0],
  tag_debugger_commands[0],
  revenge_commands[0],
].map(command => `/${command}`)
