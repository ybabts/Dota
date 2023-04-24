import { HeroName, AbilityName } from "../types/mod.ts";

export const HeroAbilities: Record<
  HeroName,
  {
    abilities: AbilityName[];
    talents: {
      name: string;
      level: number;
    }[]
  }
> = {
  "npc_dota_hero_antimage": {
    "abilities": [
      "antimage_mana_break",
      "antimage_blink",
      "antimage_counterspell",
      "antimage_mana_overload",
      "generic_hidden",
      "antimage_mana_void"
    ],
    "talents": [
      {
        "name": "special_bonus_strength_9",
        "level": 1
      },
      {
        "name": "special_bonus_unique_antimage",
        "level": 1
      },
      {
        "name": "special_bonus_unique_antimage_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_antimage_manavoid_aoe",
        "level": 2
      },
      {
        "name": "special_bonus_unique_antimage_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_antimage_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_antimage_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_antimage_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_axe": {
    "abilities": [
      "axe_berserkers_call",
      "axe_battle_hunger",
      "axe_counter_helix",
      "generic_hidden",
      "generic_hidden",
      "axe_culling_blade"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_axe_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_axe_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_axe_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_axe_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_axe_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_axe_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_axe_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_axe",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_bane": {
    "abilities": [
      "bane_enfeeble",
      "bane_brain_sap",
      "bane_nightmare",
      "generic_hidden",
      "generic_hidden",
      "bane_fiends_grip",
      "bane_nightmare_end"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_bane_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_bane_11",
        "level": 1
      },
      {
        "name": "special_bonus_unique_bane_10",
        "level": 2
      },
      {
        "name": "special_bonus_unique_bane_9",
        "level": 2
      },
      {
        "name": "special_bonus_unique_bane_5",
        "level": 3
      },
      {
        "name": "special_bonus_movement_speed_30",
        "level": 3
      },
      {
        "name": "special_bonus_unique_bane_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_bane_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_bloodseeker": {
    "abilities": [
      "bloodseeker_bloodrage",
      "bloodseeker_blood_bath",
      "bloodseeker_thirst",
      "bloodseeker_blood_mist",
      "generic_hidden",
      "bloodseeker_rupture"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_bloodseeker_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_bloodseeker_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_bloodseeker_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_bloodseeker_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_bloodseeker_3",
        "level": 3
      },
      {
        "name": "special_bonus_spell_lifesteal_15",
        "level": 3
      },
      {
        "name": "special_bonus_unique_bloodseeker_rupture_charges",
        "level": 4
      },
      {
        "name": "special_bonus_unique_bloodseeker_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_crystal_maiden": {
    "abilities": [
      "crystal_maiden_crystal_nova",
      "crystal_maiden_frostbite",
      "crystal_maiden_brilliance_aura",
      "generic_hidden",
      "generic_hidden",
      "crystal_maiden_freezing_field",
      "crystal_maiden_freezing_field_stop"
    ],
    "talents": [
      {
        "name": "special_bonus_hp_250",
        "level": 1
      },
      {
        "name": "special_bonus_unique_crystal_maiden_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_crystal_maiden_frostbite_castrange",
        "level": 2
      },
      {
        "name": "special_bonus_unique_crystal_maiden_5",
        "level": 2
      },
      {
        "name": "special_bonus_attack_speed_225",
        "level": 3
      },
      {
        "name": "special_bonus_unique_crystal_maiden_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_crystal_maiden_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_crystal_maiden_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_drow_ranger": {
    "abilities": [
      "drow_ranger_frost_arrows",
      "drow_ranger_wave_of_silence",
      "drow_ranger_multishot",
      "drow_ranger_glacier",
      "generic_hidden",
      "drow_ranger_marksmanship"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_drow_ranger_gust_selfmovespeed",
        "level": 1
      },
      {
        "name": "special_bonus_unique_drow_ranger_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_drow_ranger_gust_invis",
        "level": 2
      },
      {
        "name": "special_bonus_unique_drow_ranger_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_drow_ranger_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_drow_ranger_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_drow_ranger_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_drow_ranger_8",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_earthshaker": {
    "abilities": [
      "earthshaker_fissure",
      "earthshaker_enchant_totem",
      "earthshaker_aftershock",
      "generic_hidden",
      "generic_hidden",
      "earthshaker_echo_slam"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_base_damage_40",
        "level": 1
      },
      {
        "name": "special_bonus_unique_earthshaker_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_earthshaker_totem_damage",
        "level": 2
      },
      {
        "name": "special_bonus_unique_earthshaker_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_earthshaker_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_earthshaker_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_earthshaker_5",
        "level": 4
      },
      {
        "name": "special_bonus_unique_earthshaker",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_juggernaut": {
    "abilities": [
      "juggernaut_blade_fury",
      "juggernaut_healing_ward",
      "juggernaut_blade_dance",
      "juggernaut_swift_slash",
      "generic_hidden",
      "juggernaut_omni_slash"
    ],
    "talents": [
      {
        "name": "special_bonus_all_stats_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_juggernaut",
        "level": 1
      },
      {
        "name": "special_bonus_unique_juggernaut_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_juggernaut_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_juggernaut_blade_dance_lifesteal",
        "level": 3
      },
      {
        "name": "special_bonus_unique_juggernaut_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_juggernaut_omnislash_duration",
        "level": 4
      },
      {
        "name": "special_bonus_unique_juggernaut_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_mirana": {
    "abilities": [
      "mirana_starfall",
      "mirana_arrow",
      "mirana_leap",
      "generic_hidden",
      "generic_hidden",
      "mirana_invis"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_mirana_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_mirana_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_mirana_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_mirana_1",
        "level": 2
      },
      {
        "name": "special_bonus_unique_mirana_4",
        "level": 3
      },
      {
        "name": "special_bonus_attack_damage_35",
        "level": 3
      },
      {
        "name": "special_bonus_unique_mirana_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_mirana_7",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_nevermore": {
    "abilities": [
      "nevermore_shadowraze1",
      "nevermore_shadowraze2",
      "nevermore_shadowraze3",
      "nevermore_necromastery",
      "nevermore_dark_lord",
      "nevermore_requiem"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_nevermore_7",
        "level": 1
      },
      {
        "name": "special_bonus_attack_speed_25",
        "level": 1
      },
      {
        "name": "special_bonus_unique_nevermore_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_nevermore_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_nevermore_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_nevermore_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_nevermore_shadowraze_cooldown",
        "level": 4
      },
      {
        "name": "special_bonus_unique_nevermore_raze_procsattacks",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_morphling": {
    "abilities": [
      "morphling_waveform",
      "morphling_adaptive_strike_agi",
      "morphling_adaptive_strike_str",
      "morphling_morph_agi",
      "morphling_morph_str",
      "morphling_replicate",
      "morphling_morph_replicate",
      "morphling_morph"
    ],
    "talents": [
      {
        "name": "special_bonus_magic_resistance_15",
        "level": 1
      },
      {
        "name": "special_bonus_unique_morphling_1",
        "level": 1
      },
      {
        "name": "special_bonus_unique_morphling_8",
        "level": 2
      },
      {
        "name": "special_bonus_agility_15",
        "level": 2
      },
      {
        "name": "special_bonus_unique_morphling_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_morphling_10",
        "level": 3
      },
      {
        "name": "special_bonus_unique_morphling_waveform_cooldown",
        "level": 4
      },
      {
        "name": "special_bonus_strength_35",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_phantom_lancer": {
    "abilities": [
      "phantom_lancer_spirit_lance",
      "phantom_lancer_doppelwalk",
      "phantom_lancer_phantom_edge",
      "generic_hidden",
      "generic_hidden",
      "phantom_lancer_juxtapose"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_phantom_lancer_lance_damage",
        "level": 1
      },
      {
        "name": "special_bonus_unique_phantom_lancer_2",
        "level": 1
      },
      {
        "name": "special_bonus_strength_15",
        "level": 2
      },
      {
        "name": "special_bonus_unique_phantom_lancer_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_phantom_lancer",
        "level": 3
      },
      {
        "name": "special_bonus_unique_phantom_lancer_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_phantom_lancer_4",
        "level": 4
      },
      {
        "name": "special_bonus_24_crit_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_puck": {
    "abilities": [
      "puck_illusory_orb",
      "puck_waning_rift",
      "puck_phase_shift",
      "puck_ethereal_jaunt",
      "generic_hidden",
      "puck_dream_coil"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_puck_orb_damage",
        "level": 1
      },
      {
        "name": "special_bonus_unique_puck_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_puck",
        "level": 2
      },
      {
        "name": "special_bonus_unique_puck_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_puck_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_puck_coil_damage",
        "level": 3
      },
      {
        "name": "special_bonus_unique_puck_5",
        "level": 4
      },
      {
        "name": "special_bonus_unique_puck_rift_radius",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_pudge": {
    "abilities": [
      "pudge_meat_hook",
      "pudge_rot",
      "pudge_flesh_heap",
      "pudge_eject",
      "generic_hidden",
      "pudge_dismember"
    ],
    "talents": [
      {
        "name": "special_bonus_armor_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_pudge_4",
        "level": 1
      },
      {
        "name": "special_bonus_spell_lifesteal_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_pudge_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_pudge_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_pudge_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_pudge_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_pudge_1",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_razor": {
    "abilities": [
      "razor_plasma_field",
      "razor_static_link",
      "razor_unstable_current",
      "generic_hidden",
      "generic_hidden",
      "razor_eye_of_the_storm"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_razor_4",
        "level": 1
      },
      {
        "name": "special_bonus_agility_12",
        "level": 1
      },
      {
        "name": "special_bonus_unique_razor",
        "level": 2
      },
      {
        "name": "special_bonus_strength_14",
        "level": 2
      },
      {
        "name": "special_bonus_unique_razor_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_razor_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_razor_plasmafield_second_ring",
        "level": 4
      },
      {
        "name": "special_bonus_unique_razor_static_link_aspd",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_sand_king": {
    "abilities": [
      "sandking_burrowstrike",
      "sandking_sand_storm",
      "sandking_caustic_finale",
      "generic_hidden",
      "generic_hidden",
      "sandking_epicenter"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_sand_king_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_sand_king_burrowstrike_stun",
        "level": 1
      },
      {
        "name": "special_bonus_unique_sand_king_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_sand_king_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_sand_king_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_sand_king_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_sand_king",
        "level": 4
      },
      {
        "name": "special_bonus_unique_sand_king_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_storm_spirit": {
    "abilities": [
      "storm_spirit_static_remnant",
      "storm_spirit_electric_vortex",
      "storm_spirit_overload",
      "generic_hidden",
      "generic_hidden",
      "storm_spirit_ball_lightning"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_speed_20",
        "level": 1
      },
      {
        "name": "special_bonus_mp_regen_150",
        "level": 1
      },
      {
        "name": "special_bonus_hp_250",
        "level": 2
      },
      {
        "name": "special_bonus_unique_storm_spirit_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_storm_spirit",
        "level": 3
      },
      {
        "name": "special_bonus_unique_storm_spirit_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_storm_spirit_7",
        "level": 4
      },
      {
        "name": "special_bonus_unique_storm_spirit_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_sven": {
    "abilities": [
      "sven_storm_bolt",
      "sven_great_cleave",
      "sven_warcry",
      "generic_hidden",
      "generic_hidden",
      "sven_gods_strength"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_sven_5",
        "level": 1
      },
      {
        "name": "special_bonus_attack_speed_15",
        "level": 1
      },
      {
        "name": "special_bonus_unique_sven_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_sven_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_sven_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_sven_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_sven_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_sven_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_tiny": {
    "abilities": [
      "tiny_avalanche",
      "tiny_toss",
      "tiny_tree_grab",
      "tiny_tree_channel",
      "generic_hidden",
      "tiny_grow",
      "tiny_toss_tree"
    ],
    "talents": [
      {
        "name": "special_bonus_movement_speed_20",
        "level": 1
      },
      {
        "name": "special_bonus_strength_10",
        "level": 1
      },
      {
        "name": "special_bonus_status_resistance_10",
        "level": 2
      },
      {
        "name": "special_bonus_unique_tiny",
        "level": 2
      },
      {
        "name": "special_bonus_unique_tiny_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_tiny_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_tiny_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_tiny_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_vengefulspirit": {
    "abilities": [
      "vengefulspirit_magic_missile",
      "vengefulspirit_wave_of_terror",
      "vengefulspirit_command_aura",
      "generic_hidden",
      "generic_hidden",
      "vengefulspirit_nether_swap"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_vengeful_spirit_swap_damage",
        "level": 1
      },
      {
        "name": "special_bonus_unique_vengeful_spirit_missile_castrange",
        "level": 1
      },
      {
        "name": "special_bonus_unique_vengeful_spirit_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_vengeful_spirit_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_vengeful_spirit_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_vengeful_spirit_9",
        "level": 3
      },
      {
        "name": "special_bonus_unique_vengeful_spirit_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_vengeful_spirit_swap_damage_reduction",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_windrunner": {
    "abilities": [
      "windrunner_shackleshot",
      "windrunner_powershot",
      "windrunner_windrun",
      "windrunner_gale_force",
      "generic_hidden",
      "windrunner_focusfire"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_windranger",
        "level": 1
      },
      {
        "name": "special_bonus_unique_windranger_9",
        "level": 1
      },
      {
        "name": "special_bonus_unique_windranger_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_windranger_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_windranger_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_windranger_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_windranger_windrun_undispellable",
        "level": 4
      },
      {
        "name": "special_bonus_unique_windranger_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_zuus": {
    "abilities": [
      "zuus_arc_lightning",
      "zuus_lightning_bolt",
      "zuus_heavenly_jump",
      "zuus_cloud",
      "zuus_lightning_hands",
      "zuus_thundergods_wrath"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_zeus_jump_cooldown",
        "level": 1
      },
      {
        "name": "special_bonus_hp_250",
        "level": 1
      },
      {
        "name": "special_bonus_unique_zeus_jump_postjump_movespeed",
        "level": 2
      },
      {
        "name": "special_bonus_unique_zeus",
        "level": 2
      },
      {
        "name": "special_bonus_unique_zeus_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_zeus_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_zeus_5",
        "level": 4
      },
      {
        "name": "special_bonus_unique_zeus_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_kunkka": {
    "abilities": [
      "kunkka_torrent",
      "kunkka_tidebringer",
      "kunkka_x_marks_the_spot",
      "kunkka_torrent_storm",
      "kunkka_tidal_wave",
      "kunkka_ghostship",
      "kunkka_return"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_kunkka_tidebringer_slow",
        "level": 1
      },
      {
        "name": "special_bonus_unique_kunkka_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_kunkka_7",
        "level": 2
      },
      {
        "name": "special_bonus_attack_damage_45",
        "level": 2
      },
      {
        "name": "special_bonus_unique_kunkka",
        "level": 3
      },
      {
        "name": "special_bonus_unique_kunkka_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_kunkka_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_kunkka_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_lina": {
    "abilities": [
      "lina_dragon_slave",
      "lina_light_strike_array",
      "lina_fiery_soul",
      "lina_flame_cloak",
      "generic_hidden",
      "lina_laguna_blade"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_damage_20",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lina_1",
        "level": 1
      },
      {
        "name": "special_bonus_hp_250",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lina_3",
        "level": 2
      },
      {
        "name": "special_bonus_spell_amplify_11",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lina_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lina_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_lina_7",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_lich": {
    "abilities": [
      "lich_frost_nova",
      "lich_frost_shield",
      "lich_sinister_gaze",
      "lich_ice_spire",
      "generic_hidden",
      "lich_chain_frost"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_lich_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lich_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lich_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lich_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lich_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lich_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lich_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_lich_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_lion": {
    "abilities": [
      "lion_impale",
      "lion_voodoo",
      "lion_mana_drain",
      "generic_hidden",
      "generic_hidden",
      "lion_finger_of_death"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_lion_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lion_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lion_10",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lion_11",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lion_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lion_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lion_manadrain_damage",
        "level": 4
      },
      {
        "name": "special_bonus_unique_lion_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_shadow_shaman": {
    "abilities": [
      "shadow_shaman_ether_shock",
      "shadow_shaman_voodoo",
      "shadow_shaman_shackles",
      "generic_hidden",
      "generic_hidden",
      "shadow_shaman_mass_serpent_ward"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_shadow_shaman_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_shadow_shaman_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_shadow_shaman_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_shadow_shaman_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_shadow_shaman_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_shadow_shaman_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_shadow_shaman_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_shadow_shaman_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_slardar": {
    "abilities": [
      "slardar_sprint",
      "slardar_slithereen_crush",
      "slardar_bash",
      "generic_hidden",
      "generic_hidden",
      "slardar_amplify_damage"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_slardar_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_slardar_slithereen_crush_stun",
        "level": 1
      },
      {
        "name": "special_bonus_hp_325",
        "level": 2
      },
      {
        "name": "special_bonus_unique_slardar_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_slardar",
        "level": 3
      },
      {
        "name": "special_bonus_unique_slardar_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_slardar_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_slardar_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_tidehunter": {
    "abilities": [
      "tidehunter_gush",
      "tidehunter_kraken_shell",
      "tidehunter_anchor_smash",
      "tidehunter_arm_of_the_deep",
      "generic_hidden",
      "tidehunter_ravage"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_tidehunter_9",
        "level": 1
      },
      {
        "name": "special_bonus_unique_tidehunter_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_tidehunter_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_tidehunter_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_tidehunter_10",
        "level": 3
      },
      {
        "name": "special_bonus_unique_tidehunter_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_tidehunter_7",
        "level": 4
      },
      {
        "name": "special_bonus_unique_tidehunter_8",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_witch_doctor": {
    "abilities": [
      "witch_doctor_paralyzing_cask",
      "witch_doctor_voodoo_restoration",
      "witch_doctor_maledict",
      "witch_doctor_voodoo_switcheroo",
      "generic_hidden",
      "witch_doctor_death_ward"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_witch_doctor_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_witch_doctor_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_witch_doctor_3",
        "level": 2
      },
      {
        "name": "special_bonus_hp_300",
        "level": 2
      },
      {
        "name": "special_bonus_unique_witch_doctor_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_witch_doctor_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_witch_doctor_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_witch_doctor_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_riki": {
    "abilities": [
      "riki_smoke_screen",
      "riki_blink_strike",
      "riki_tricks_of_the_trade",
      "generic_hidden",
      "generic_hidden",
      "riki_backstab"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_riki_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_riki_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_riki_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_riki_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_riki_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_riki_9",
        "level": 3
      },
      {
        "name": "special_bonus_unique_riki_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_riki_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_enigma": {
    "abilities": [
      "enigma_malefice",
      "enigma_demonic_conversion",
      "enigma_midnight_pulse",
      "generic_hidden",
      "generic_hidden",
      "enigma_black_hole"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_enigma_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_enigma_6",
        "level": 1
      },
      {
        "name": "special_bonus_hp_250",
        "level": 2
      },
      {
        "name": "special_bonus_unique_enigma_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_enigma_9",
        "level": 3
      },
      {
        "name": "special_bonus_unique_enigma_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_enigma_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_enigma",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_tinker": {
    "abilities": [
      "tinker_laser",
      "tinker_heat_seeking_missile",
      "tinker_defense_matrix",
      "tinker_warp_grenade",
      "tinker_keen_teleport",
      "tinker_rearm"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_tinker_4",
        "level": 1
      },
      {
        "name": "special_bonus_mana_reduction_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_tinker_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_tinker_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_tinker_defense_matrix_cdr",
        "level": 3
      },
      {
        "name": "special_bonus_unique_tinker_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_tinker",
        "level": 4
      },
      {
        "name": "special_bonus_unique_tinker_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_sniper": {
    "abilities": [
      "sniper_shrapnel",
      "sniper_headshot",
      "sniper_take_aim",
      "sniper_concussive_grenade",
      "generic_hidden",
      "sniper_assassinate"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_sniper_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_sniper_headshot_damage",
        "level": 1
      },
      {
        "name": "special_bonus_attack_speed_30",
        "level": 2
      },
      {
        "name": "special_bonus_unique_sniper_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_sniper_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_sniper_1",
        "level": 3
      },
      {
        "name": "special_bonus_attack_range_100",
        "level": 4
      },
      {
        "name": "special_bonus_unique_sniper_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_necrolyte": {
    "abilities": [
      "necrolyte_death_pulse",
      "necrolyte_sadist",
      "necrolyte_heartstopper_aura",
      "necrolyte_death_seeker",
      "generic_hidden",
      "necrolyte_reapers_scythe"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_necrophos_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_necrophos_heartstopper_regen_duration",
        "level": 1
      },
      {
        "name": "special_bonus_unique_necrophos_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_necrophos_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_necrophos_sadist_heal_bonus",
        "level": 3
      },
      {
        "name": "special_bonus_unique_necrophos_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_necrophos_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_necrophos",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_warlock": {
    "abilities": [
      "warlock_fatal_bonds",
      "warlock_shadow_word",
      "warlock_upheaval",
      "generic_hidden",
      "generic_hidden",
      "warlock_rain_of_chaos"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_warlock_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_warlock_upheaval_aoe",
        "level": 1
      },
      {
        "name": "special_bonus_unique_warlock_10",
        "level": 2
      },
      {
        "name": "special_bonus_unique_warlock_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_warlock_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_warlock_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_warlock_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_warlock_1",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_beastmaster": {
    "abilities": [
      "beastmaster_wild_axes",
      "beastmaster_call_of_the_wild_boar",
      "beastmaster_call_of_the_wild_hawk",
      "beastmaster_inner_beast",
      "beastmaster_drums_of_slom",
      "beastmaster_primal_roar",
      "beastmaster_drums_of_slom_stop"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_damage_30",
        "level": 1
      },
      {
        "name": "special_bonus_unique_beastmaster_9",
        "level": 1
      },
      {
        "name": "special_bonus_unique_beastmaster_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_beastmaster_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_beastmaster_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_beastmaster_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_beastmaster_wild_axe_cooldown",
        "level": 4
      },
      {
        "name": "special_bonus_unique_beastmaster_7",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_queenofpain": {
    "abilities": [
      "queenofpain_shadow_strike",
      "queenofpain_blink",
      "queenofpain_scream_of_pain",
      "generic_hidden",
      "generic_hidden",
      "queenofpain_sonic_wave"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_damage_20",
        "level": 1
      },
      {
        "name": "special_bonus_strength_11",
        "level": 1
      },
      {
        "name": "special_bonus_unique_queen_of_pain_4",
        "level": 2
      },
      {
        "name": "special_bonus_attack_speed_30",
        "level": 2
      },
      {
        "name": "special_bonus_unique_queen_of_pain_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_queen_of_pain_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_queen_of_pain_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_queen_of_pain_7",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_venomancer": {
    "abilities": [
      "venomancer_venomous_gale",
      "venomancer_poison_sting",
      "venomancer_plague_ward",
      "venomancer_latent_poison",
      "venomancer_poison_nova",
      "venomancer_noxious_plague"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_venomancer_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_venomancer_poisonsting_regen_reduction",
        "level": 1
      },
      {
        "name": "special_bonus_unique_venomancer_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_venomancer_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_venomancer_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_venomancer_gale_plagueward",
        "level": 3
      },
      {
        "name": "special_bonus_unique_venomancer_5",
        "level": 4
      },
      {
        "name": "special_bonus_unique_venomancer",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_faceless_void": {
    "abilities": [
      "faceless_void_time_walk",
      "faceless_void_time_dilation",
      "faceless_void_time_lock",
      "faceless_void_time_walk_reverse",
      "generic_hidden",
      "faceless_void_chronosphere"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_faceless_void_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_faceless_void_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_faceless_void_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_faceless_void_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_faceless_void",
        "level": 3
      },
      {
        "name": "special_bonus_unique_faceless_void_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_faceless_void_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_faceless_void_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_skeleton_king": {
    "abilities": [
      "skeleton_king_hellfire_blast",
      "skeleton_king_vampiric_aura",
      "skeleton_king_mortal_strike",
      "generic_hidden",
      "generic_hidden",
      "skeleton_king_reincarnation"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_wraith_king_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_wraith_king_vampiric_skeleton_duration",
        "level": 1
      },
      {
        "name": "special_bonus_unique_wraith_king_11",
        "level": 2
      },
      {
        "name": "special_bonus_unique_wraith_king_6",
        "level": 2
      },
      {
        "name": "special_bonus_cleave_25",
        "level": 3
      },
      {
        "name": "special_bonus_unique_wraith_king_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_wraith_king_10",
        "level": 4
      },
      {
        "name": "special_bonus_unique_wraith_king_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_death_prophet": {
    "abilities": [
      "death_prophet_carrion_swarm",
      "death_prophet_silence",
      "death_prophet_spirit_siphon",
      "generic_hidden",
      "generic_hidden",
      "death_prophet_exorcism"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_damage_30",
        "level": 1
      },
      {
        "name": "special_bonus_magic_resistance_12",
        "level": 1
      },
      {
        "name": "special_bonus_hp_300",
        "level": 2
      },
      {
        "name": "special_bonus_unique_death_prophet_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_death_prophet_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_death_prophet_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_death_prophet_5",
        "level": 4
      },
      {
        "name": "special_bonus_unique_death_prophet",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_phantom_assassin": {
    "abilities": [
      "phantom_assassin_stifling_dagger",
      "phantom_assassin_phantom_strike",
      "phantom_assassin_blur",
      "phantom_assassin_fan_of_knives",
      "generic_hidden",
      "phantom_assassin_coup_de_grace"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_phantom_assassin_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_phantom_assassin_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_phantom_assassin_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_phantom_assassin_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_phantom_assassin_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_phantom_assassin_strike_aspd",
        "level": 3
      },
      {
        "name": "special_bonus_unique_phantom_assassin_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_phantom_assassin",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_pugna": {
    "abilities": [
      "pugna_nether_blast",
      "pugna_decrepify",
      "pugna_nether_ward",
      "generic_hidden",
      "generic_hidden",
      "pugna_life_drain"
    ],
    "talents": [
      {
        "name": "special_bonus_movement_speed_20",
        "level": 1
      },
      {
        "name": "special_bonus_hp_200",
        "level": 1
      },
      {
        "name": "special_bonus_unique_pugna_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_pugna_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_pugna_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_pugna_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_pugna_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_pugna_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_templar_assassin": {
    "abilities": [
      "templar_assassin_refraction",
      "templar_assassin_meld",
      "templar_assassin_psi_blades",
      "templar_assassin_trap",
      "templar_assassin_trap_teleport",
      "templar_assassin_psionic_trap"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_templar_assassin_refraction_damage",
        "level": 1
      },
      {
        "name": "special_bonus_unique_templar_assassin_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_templar_assassin_refraction_disable_cast",
        "level": 2
      },
      {
        "name": "special_bonus_unique_templar_assassin_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_templar_assassin_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_templar_assassin_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_templar_assassin_7",
        "level": 4
      },
      {
        "name": "special_bonus_unique_templar_assassin",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_viper": {
    "abilities": [
      "viper_poison_attack",
      "viper_nethertoxin",
      "viper_corrosive_skin",
      "viper_nose_dive",
      "generic_hidden",
      "viper_viper_strike"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_viper_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_viper_1",
        "level": 1
      },
      {
        "name": "special_bonus_unique_viper_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_viper_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_viper_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_viper_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_viper_5",
        "level": 4
      },
      {
        "name": "special_bonus_unique_viper_8",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_luna": {
    "abilities": [
      "luna_lucent_beam",
      "luna_moon_glaive",
      "luna_lunar_blessing",
      "generic_hidden",
      "generic_hidden",
      "luna_eclipse"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_luna_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_luna_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_luna_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_luna_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_luna_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_luna_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_luna_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_luna_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_dragon_knight": {
    "abilities": [
      "dragon_knight_breathe_fire",
      "dragon_knight_dragon_tail",
      "dragon_knight_dragon_blood",
      "dragon_knight_fireball",
      "generic_hidden",
      "dragon_knight_elder_dragon_form"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_damage_15",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dragon_knight_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dragon_knight_2",
        "level": 2
      },
      {
        "name": "special_bonus_hp_400",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dragon_knight_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dragon_knight_9",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dragon_knight",
        "level": 4
      },
      {
        "name": "special_bonus_unique_dragon_knight_8",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_dazzle": {
    "abilities": [
      "dazzle_poison_touch",
      "dazzle_shallow_grave",
      "dazzle_shadow_wave",
      "generic_hidden",
      "generic_hidden",
      "dazzle_bad_juju"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_speed_30",
        "level": 1
      },
      {
        "name": "special_bonus_mp_regen_175",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dazzle_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dazzle_poison_touch_attack_range_bonus",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dazzle_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dazzle_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dazzle_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_dazzle_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_rattletrap": {
    "abilities": [
      "rattletrap_battery_assault",
      "rattletrap_power_cogs",
      "rattletrap_rocket_flare",
      "rattletrap_overclocking",
      "rattletrap_jetpack",
      "rattletrap_hookshot"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_clockwerk_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_clockwerk_9",
        "level": 1
      },
      {
        "name": "special_bonus_unique_clockwerk_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_clockwerk_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_clockwerk_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_clockwerk_flare_damage",
        "level": 3
      },
      {
        "name": "special_bonus_unique_clockwerk_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_clockwerk",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_leshrac": {
    "abilities": [
      "leshrac_split_earth",
      "leshrac_diabolic_edict",
      "leshrac_lightning_storm",
      "leshrac_greater_lightning_storm",
      "generic_hidden",
      "leshrac_pulse_nova"
    ],
    "talents": [
      {
        "name": "special_bonus_mp_regen_150",
        "level": 1
      },
      {
        "name": "special_bonus_unique_leshrac_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_leshrac_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_leshrac_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_leshrac_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_leshrac_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_leshrac_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_leshrac_1",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_furion": {
    "abilities": [
      "furion_sprout",
      "furion_teleportation",
      "furion_force_of_nature",
      "furion_curse_of_the_forest",
      "generic_hidden",
      "furion_wrath_of_nature"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_furion_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_furion_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_furion_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_furion_teleportation_max_stacks",
        "level": 2
      },
      {
        "name": "special_bonus_unique_furion_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_furion_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_furion_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_furion",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_life_stealer": {
    "abilities": [
      "life_stealer_rage",
      "life_stealer_feast",
      "life_stealer_ghoul_frenzy",
      "life_stealer_open_wounds",
      "generic_hidden",
      "life_stealer_infest",
      "life_stealer_consume"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_lifestealer_infest_damage",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lifestealer_2",
        "level": 1
      },
      {
        "name": "special_bonus_hp_325",
        "level": 2
      },
      {
        "name": "special_bonus_attack_damage_25",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lifestealer_infest_target_bonus",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lifestealer_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lifestealer_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_lifestealer",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_dark_seer": {
    "abilities": [
      "dark_seer_vacuum",
      "dark_seer_ion_shell",
      "dark_seer_surge",
      "dark_seer_normal_punch",
      "generic_hidden",
      "dark_seer_wall_of_replica"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_dark_seer_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dark_seer_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dark_seer_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dark_seer_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dark_seer_13",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dark_seer",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dark_seer_14",
        "level": 4
      },
      {
        "name": "special_bonus_unique_dark_seer_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_clinkz": {
    "abilities": [
      "clinkz_strafe",
      "clinkz_tar_bomb",
      "clinkz_death_pact",
      "clinkz_burning_army",
      "clinkz_burning_barrage",
      "clinkz_wind_walk"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_clinkz_1",
        "level": 1
      },
      {
        "name": "special_bonus_unique_clinkz_10",
        "level": 1
      },
      {
        "name": "special_bonus_attack_range_75",
        "level": 2
      },
      {
        "name": "special_bonus_unique_clinkz_9",
        "level": 2
      },
      {
        "name": "special_bonus_unique_clinkz_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_clinkz_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_clinkz_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_clinkz_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_omniknight": {
    "abilities": [
      "omniknight_purification",
      "omniknight_martyr",
      "omniknight_hammer_of_purity",
      "generic_hidden",
      "generic_hidden",
      "omniknight_guardian_angel"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_omniknight_5",
        "level": 1
      },
      {
        "name": "special_bonus_attack_base_damage_50",
        "level": 1
      },
      {
        "name": "special_bonus_unique_omniknight_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_omniknight_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_omniknight_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_omniknight_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_omniknight_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_omniknight_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_enchantress": {
    "abilities": [
      "enchantress_impetus",
      "enchantress_enchant",
      "enchantress_natures_attendants",
      "enchantress_bunny_hop",
      "enchantress_little_friends",
      "enchantress_untouchable"
    ],
    "talents": [
      {
        "name": "special_bonus_magic_resistance_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_enchantress_6",
        "level": 1
      },
      {
        "name": "special_bonus_attack_damage_45",
        "level": 2
      },
      {
        "name": "special_bonus_unique_enchantress_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_enchantress_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_enchantress_enchant_health_damage",
        "level": 3
      },
      {
        "name": "special_bonus_unique_enchantress_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_enchantress_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_huskar": {
    "abilities": [
      "huskar_inner_fire",
      "huskar_burning_spear",
      "huskar_berserkers_blood",
      "generic_hidden",
      "generic_hidden",
      "huskar_life_break"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_huskar_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_huskar_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_huskar_2",
        "level": 2
      },
      {
        "name": "special_bonus_lifesteal_15",
        "level": 2
      },
      {
        "name": "special_bonus_unique_huskar_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_huskar_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_huskar",
        "level": 4
      },
      {
        "name": "special_bonus_unique_huskar_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_night_stalker": {
    "abilities": [
      "night_stalker_void",
      "night_stalker_crippling_fear",
      "night_stalker_hunter_in_the_night",
      "generic_hidden",
      "generic_hidden",
      "night_stalker_darkness"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_night_stalker_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_night_stalker_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_night_stalker_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_night_stalker_hunter_status_resist",
        "level": 2
      },
      {
        "name": "special_bonus_unique_night_stalker_6",
        "level": 3
      },
      {
        "name": "special_bonus_strength_20",
        "level": 3
      },
      {
        "name": "special_bonus_unique_night_stalker_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_night_stalker",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_broodmother": {
    "abilities": [
      "broodmother_insatiable_hunger",
      "broodmother_spin_web",
      "broodmother_silken_bola",
      "broodmother_sticky_snare",
      "generic_hidden",
      "broodmother_spawn_spiderlings"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_broodmother_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_broodmother_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_broodmother_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_broodmother_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_broodmother_2",
        "level": 3
      },
      {
        "name": "special_bonus_attack_speed_35",
        "level": 3
      },
      {
        "name": "special_bonus_unique_broodmother_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_broodmother_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_bounty_hunter": {
    "abilities": [
      "bounty_hunter_shuriken_toss",
      "bounty_hunter_jinada",
      "bounty_hunter_wind_walk",
      "generic_hidden",
      "generic_hidden",
      "bounty_hunter_track"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_bounty_hunter_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_bounty_hunter_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_bounty_hunter_9",
        "level": 2
      },
      {
        "name": "special_bonus_unique_bounty_hunter_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_bounty_hunter_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_bounty_hunter",
        "level": 3
      },
      {
        "name": "special_bonus_unique_bounty_hunter_7",
        "level": 4
      },
      {
        "name": "special_bonus_unique_bounty_hunter_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_weaver": {
    "abilities": [
      "weaver_the_swarm",
      "weaver_shukuchi",
      "weaver_geminate_attack",
      "generic_hidden",
      "generic_hidden",
      "weaver_time_lapse"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_weaver_1",
        "level": 1
      },
      {
        "name": "special_bonus_strength_9",
        "level": 1
      },
      {
        "name": "special_bonus_mana_break_20",
        "level": 2
      },
      {
        "name": "special_bonus_unique_weaver_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_weaver_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_weaver_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_weaver_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_weaver_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_jakiro": {
    "abilities": [
      "jakiro_dual_breath",
      "jakiro_ice_path",
      "jakiro_liquid_fire",
      "jakiro_liquid_ice",
      "generic_hidden",
      "jakiro_macropyre"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_range_275",
        "level": 1
      },
      {
        "name": "special_bonus_unique_jakiro_dualbreath_slow",
        "level": 1
      },
      {
        "name": "special_bonus_unique_jakiro_4",
        "level": 2
      },
      {
        "name": "special_bonus_hp_325",
        "level": 2
      },
      {
        "name": "special_bonus_unique_jakiro",
        "level": 3
      },
      {
        "name": "special_bonus_unique_jakiro_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_jakiro_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_jakiro_6",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_batrider": {
    "abilities": [
      "batrider_sticky_napalm",
      "batrider_flamebreak",
      "batrider_firefly",
      "batrider_sticky_napalm_application_damage",
      "generic_hidden",
      "batrider_flaming_lasso"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_batrider_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_batrider_3",
        "level": 1
      },
      {
        "name": "special_bonus_movement_speed_20",
        "level": 2
      },
      {
        "name": "special_bonus_unique_batrider_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_batrider_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_batrider_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_batrider_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_batrider_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_chen": {
    "abilities": [
      "chen_penitence",
      "chen_holy_persuasion",
      "chen_divine_favor",
      "generic_hidden",
      "generic_hidden",
      "chen_hand_of_god"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_chen_11",
        "level": 1
      },
      {
        "name": "special_bonus_unique_chen_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_chen_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_chen_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_chen_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_chen_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_chen_12",
        "level": 4
      },
      {
        "name": "special_bonus_unique_chen_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_spectre": {
    "abilities": [
      "spectre_spectral_dagger",
      "spectre_desolate",
      "spectre_dispersion",
      "spectre_reality",
      "spectre_haunt_single",
      "spectre_haunt"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_spectre",
        "level": 1
      },
      {
        "name": "special_bonus_all_stats_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_spectre_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_spectre_6",
        "level": 2
      },
      {
        "name": "special_bonus_hp_350",
        "level": 3
      },
      {
        "name": "special_bonus_unique_spectre_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_spectre_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_spectre_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_doom_bringer": {
    "abilities": [
      "doom_bringer_devour",
      "doom_bringer_scorched_earth",
      "doom_bringer_infernal_blade",
      "doom_bringer_empty1",
      "doom_bringer_empty2",
      "doom_bringer_doom"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_doom_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_doom_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_doom_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_doom_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_doom_9",
        "level": 3
      },
      {
        "name": "special_bonus_unique_doom_10",
        "level": 3
      },
      {
        "name": "special_bonus_unique_doom_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_doom_11",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_ancient_apparition": {
    "abilities": [
      "ancient_apparition_cold_feet",
      "ancient_apparition_ice_vortex",
      "ancient_apparition_chilling_touch",
      "generic_hidden",
      "generic_hidden",
      "ancient_apparition_ice_blast",
      "ancient_apparition_ice_blast_release"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_ancient_apparition_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_ancient_apparition_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_ancient_apparition_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_ancient_apparition_1",
        "level": 2
      },
      {
        "name": "special_bonus_unique_ancient_apparition_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_ancient_apparition_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_ancient_apparition_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_ancient_apparition_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_ursa": {
    "abilities": [
      "ursa_earthshock",
      "ursa_overpower",
      "ursa_fury_swipes",
      "generic_hidden",
      "generic_hidden",
      "ursa_enrage"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_ursa_4",
        "level": 1
      },
      {
        "name": "special_bonus_mp_regen_175",
        "level": 1
      },
      {
        "name": "special_bonus_unique_ursa_earthshock_furyswipes",
        "level": 2
      },
      {
        "name": "special_bonus_unique_ursa_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_ursa_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_ursa",
        "level": 3
      },
      {
        "name": "special_bonus_unique_ursa_enrage_radius",
        "level": 4
      },
      {
        "name": "special_bonus_unique_ursa_7",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_spirit_breaker": {
    "abilities": [
      "spirit_breaker_charge_of_darkness",
      "spirit_breaker_bulldoze",
      "spirit_breaker_greater_bash",
      "spirit_breaker_planar_pocket",
      "generic_hidden",
      "spirit_breaker_nether_strike"
    ],
    "talents": [
      {
        "name": "special_bonus_night_vision_500",
        "level": 1
      },
      {
        "name": "special_bonus_armor_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_spirit_breaker_2",
        "level": 2
      },
      {
        "name": "special_bonus_attack_damage_40",
        "level": 2
      },
      {
        "name": "special_bonus_unique_spirit_breaker_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_spirit_breaker_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_spirit_breaker_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_spirit_breaker_shield",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_gyrocopter": {
    "abilities": [
      "gyrocopter_rocket_barrage",
      "gyrocopter_homing_missile",
      "gyrocopter_flak_cannon",
      "generic_hidden",
      "generic_hidden",
      "gyrocopter_call_down"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_gyrocopter_4",
        "level": 1
      },
      {
        "name": "special_bonus_hp_200",
        "level": 1
      },
      {
        "name": "special_bonus_unique_gyrocopter_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_gyrocopter_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_gyrocopter_flak_cannon_bonus_damage",
        "level": 3
      },
      {
        "name": "special_bonus_unique_gyrocopter_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_gyrocopter_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_gyrocopter_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_alchemist": {
    "abilities": [
      "alchemist_acid_spray",
      "alchemist_unstable_concoction",
      "alchemist_corrosive_weaponry",
      "alchemist_berserk_potion",
      "alchemist_goblins_greed",
      "alchemist_chemical_rage",
      "alchemist_unstable_concoction_throw"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_alchemist_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_alchemist",
        "level": 1
      },
      {
        "name": "special_bonus_unique_alchemist_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_alchemist_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_alchemist_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_alchemist_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_alchemist_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_alchemist_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_invoker": {
    "abilities": [
      "invoker_quas",
      "invoker_wex",
      "invoker_exort",
      "invoker_empty1",
      "invoker_empty2",
      "invoker_invoke",
      "invoker_cold_snap",
      "invoker_ghost_walk",
      "invoker_tornado",
      "invoker_emp",
      "invoker_alacrity",
      "invoker_chaos_meteor",
      "invoker_sun_strike",
      "invoker_forge_spirit",
      "invoker_ice_wall",
      "invoker_deafening_blast"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_invoker_ice_wall_dps",
        "level": 1
      },
      {
        "name": "special_bonus_unique_invoker_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_invoker_11",
        "level": 2
      },
      {
        "name": "special_bonus_unique_invoker_9",
        "level": 2
      },
      {
        "name": "special_bonus_unique_invoker_additional_chaos_meteors",
        "level": 3
      },
      {
        "name": "special_bonus_unique_invoker_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_invoker_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_invoker_13",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_silencer": {
    "abilities": [
      "silencer_curse_of_the_silent",
      "silencer_glaives_of_wisdom",
      "silencer_last_word",
      "generic_hidden",
      "generic_hidden",
      "silencer_global_silence"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_silencer",
        "level": 1
      },
      {
        "name": "special_bonus_attack_speed_20",
        "level": 1
      },
      {
        "name": "special_bonus_unique_silencer_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_silencer_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_silencer_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_silencer_arcane_curse_undispellable",
        "level": 3
      },
      {
        "name": "special_bonus_unique_silencer_glaives_bounces",
        "level": 4
      },
      {
        "name": "special_bonus_unique_silencer_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_obsidian_destroyer": {
    "abilities": [
      "obsidian_destroyer_arcane_orb",
      "obsidian_destroyer_astral_imprisonment",
      "obsidian_destroyer_equilibrium",
      "generic_hidden",
      "generic_hidden",
      "obsidian_destroyer_sanity_eclipse"
    ],
    "talents": [
      {
        "name": "special_bonus_hp_200",
        "level": 1
      },
      {
        "name": "special_bonus_attack_speed_20",
        "level": 1
      },
      {
        "name": "special_bonus_unique_outworld_devourer_astral_castrange",
        "level": 2
      },
      {
        "name": "special_bonus_movement_speed_30",
        "level": 2
      },
      {
        "name": "special_bonus_strength_20",
        "level": 3
      },
      {
        "name": "special_bonus_unique_outworld_devourer_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_outworld_devourer",
        "level": 4
      },
      {
        "name": "special_bonus_unique_outworld_devourer_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_lycan": {
    "abilities": [
      "lycan_summon_wolves",
      "lycan_howl",
      "lycan_feral_impulse",
      "lycan_wolf_bite",
      "generic_hidden",
      "lycan_shapeshift"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_lycan_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lycan_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lycan_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lycan_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lycan_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lycan_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lycan_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_lycan_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_brewmaster": {
    "abilities": [
      "brewmaster_thunder_clap",
      "brewmaster_cinder_brew",
      "brewmaster_drunken_brawler",
      "brewmaster_primal_companion",
      "generic_hidden",
      "brewmaster_primal_split"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_brewmaster_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_brewmaster_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_brewmaster_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_brewmaster_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_brewmaster",
        "level": 3
      },
      {
        "name": "special_bonus_attack_speed_80",
        "level": 3
      },
      {
        "name": "special_bonus_unique_brewmaster_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_brewmaster_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_shadow_demon": {
    "abilities": [
      "shadow_demon_disruption",
      "shadow_demon_disseminate",
      "shadow_demon_shadow_poison",
      "shadow_demon_shadow_poison_release",
      "shadow_demon_demonic_cleanse",
      "shadow_demon_demonic_purge"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_shadow_demon_4",
        "level": 1
      },
      {
        "name": "special_bonus_strength_12",
        "level": 1
      },
      {
        "name": "special_bonus_movement_speed_25",
        "level": 2
      },
      {
        "name": "special_bonus_unique_shadow_demon_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_shadow_demon_disseminate_damage",
        "level": 3
      },
      {
        "name": "special_bonus_unique_shadow_demon_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_shadow_demon_9",
        "level": 4
      },
      {
        "name": "special_bonus_unique_shadow_demon_7",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_lone_druid": {
    "abilities": [
      "lone_druid_spirit_bear",
      "lone_druid_spirit_link",
      "lone_druid_savage_roar",
      "generic_hidden",
      "generic_hidden",
      "lone_druid_true_form"
    ],
    "talents": [
      {
        "name": "special_bonus_hp_200",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lone_druid_11",
        "level": 1
      },
      {
        "name": "special_bonus_unique_lone_druid_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lone_druid_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_lone_druid_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lone_druid_9",
        "level": 3
      },
      {
        "name": "special_bonus_unique_lone_druid_10",
        "level": 4
      },
      {
        "name": "special_bonus_unique_lone_druid_7",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_chaos_knight": {
    "abilities": [
      "chaos_knight_chaos_bolt",
      "chaos_knight_reality_rift",
      "chaos_knight_chaos_strike",
      "generic_hidden",
      "generic_hidden",
      "chaos_knight_phantasm"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_chaos_knight_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_chaos_knight_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_chaos_knight_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_chaos_knight_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_chaos_knight_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_chaos_knight",
        "level": 3
      },
      {
        "name": "special_bonus_unique_chaos_knight_5",
        "level": 4
      },
      {
        "name": "special_bonus_unique_chaos_knight_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_meepo": {
    "abilities": [
      "meepo_earthbind",
      "meepo_poof",
      "meepo_ransack",
      "meepo_petrify",
      "meepo_megameepo",
      "meepo_divided_we_stand",
      "meepo_megameepo_fling"
    ],
    "talents": [
      {
        "name": "special_bonus_strength_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_meepo_2",
        "level": 1
      },
      {
        "name": "special_bonus_evasion_15",
        "level": 2
      },
      {
        "name": "special_bonus_unique_meepo_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_meepo_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_meepo_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_meepo_7",
        "level": 4
      },
      {
        "name": "special_bonus_unique_meepo_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_treant": {
    "abilities": [
      "treant_natures_grasp",
      "treant_leech_seed",
      "treant_living_armor",
      "treant_eyes_in_the_forest",
      "treant_natures_guise",
      "treant_overgrowth"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_treant_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_treant_12",
        "level": 1
      },
      {
        "name": "special_bonus_unique_treant_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_treant_9",
        "level": 2
      },
      {
        "name": "special_bonus_unique_treant_13",
        "level": 3
      },
      {
        "name": "special_bonus_unique_treant_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_treant_14",
        "level": 4
      },
      {
        "name": "special_bonus_unique_treant_7",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_ogre_magi": {
    "abilities": [
      "ogre_magi_fireblast",
      "ogre_magi_ignite",
      "ogre_magi_bloodlust",
      "ogre_magi_unrefined_fireblast",
      "ogre_magi_smash",
      "ogre_magi_multicast",
      "ogre_magi_dumb_luck"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_ogre_magi_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_ogre_magi_5",
        "level": 1
      },
      {
        "name": "special_bonus_attack_damage_80",
        "level": 2
      },
      {
        "name": "special_bonus_hp_250",
        "level": 2
      },
      {
        "name": "special_bonus_strength_30",
        "level": 3
      },
      {
        "name": "special_bonus_unique_ogre_magi",
        "level": 3
      },
      {
        "name": "special_bonus_unique_ogre_magi_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_ogre_magi_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_undying": {
    "abilities": [
      "undying_decay",
      "undying_soul_rip",
      "undying_tombstone",
      "undying_tombstone_grab",
      "generic_hidden",
      "undying_flesh_golem"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_undying_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_undying_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_undying",
        "level": 2
      },
      {
        "name": "special_bonus_unique_undying_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_undying_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_undying_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_undying_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_undying_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_rubick": {
    "abilities": [
      "rubick_telekinesis",
      "rubick_fade_bolt",
      "rubick_arcane_supremacy",
      "rubick_empty1",
      "rubick_empty2",
      "rubick_spell_steal",
      "rubick_telekinesis_land",
      "rubick_hidden1",
      "rubick_hidden2",
      "rubick_hidden3",
      "rubick_telekinesis_land_self"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_rubick_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_rubick_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_rubick_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_rubick_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_rubick_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_rubick",
        "level": 3
      },
      {
        "name": "special_bonus_unique_rubick_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_rubick_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_disruptor": {
    "abilities": [
      "disruptor_thunder_strike",
      "disruptor_glimpse",
      "disruptor_kinetic_field",
      "generic_hidden",
      "generic_hidden",
      "disruptor_static_storm"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_disruptor_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_disruptor_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_disruptor_9",
        "level": 2
      },
      {
        "name": "special_bonus_unique_disruptor_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_disruptor_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_disruptor",
        "level": 3
      },
      {
        "name": "special_bonus_unique_disruptor_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_disruptor_8",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_nyx_assassin": {
    "abilities": [
      "nyx_assassin_impale",
      "nyx_assassin_jolt",
      "nyx_assassin_spiked_carapace",
      "nyx_assassin_burrow",
      "generic_hidden",
      "nyx_assassin_vendetta",
      "nyx_assassin_unburrow"
    ],
    "talents": [
      {
        "name": "special_bonus_spell_amplify_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_nyx_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_nyx_carapace_reflect_duration",
        "level": 2
      },
      {
        "name": "special_bonus_unique_nyx_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_nyx_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_nyx_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_nyx",
        "level": 4
      },
      {
        "name": "special_bonus_unique_nyx_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_naga_siren": {
    "abilities": [
      "naga_siren_mirror_image",
      "naga_siren_ensnare",
      "naga_siren_rip_tide",
      "naga_siren_reel_in",
      "generic_hidden",
      "naga_siren_song_of_the_siren",
      "naga_siren_song_of_the_siren_cancel"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_naga_siren_net_cooldown",
        "level": 1
      },
      {
        "name": "special_bonus_unique_naga_siren_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_naga_siren_4",
        "level": 2
      },
      {
        "name": "special_bonus_strength_15",
        "level": 2
      },
      {
        "name": "special_bonus_unique_naga_siren_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_naga_siren",
        "level": 3
      },
      {
        "name": "special_bonus_unique_naga_siren_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_naga_siren_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_keeper_of_the_light": {
    "abilities": [
      "keeper_of_the_light_illuminate",
      "keeper_of_the_light_blinding_light",
      "keeper_of_the_light_chakra_magic",
      "keeper_of_the_light_radiant_bind",
      "keeper_of_the_light_will_o_wisp",
      "keeper_of_the_light_spirit_form",
      "keeper_of_the_light_illuminate_end",
      "keeper_of_the_light_spirit_form_illuminate",
      "keeper_of_the_light_spirit_form_illuminate_end",
      "keeper_of_the_light_recall"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_keeper_of_the_light_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_keeper_of_the_light_illuminate_cooldown",
        "level": 1
      },
      {
        "name": "special_bonus_unique_keeper_of_the_light_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_keeper_of_the_light_13",
        "level": 2
      },
      {
        "name": "special_bonus_unique_keeper_of_the_light_11",
        "level": 3
      },
      {
        "name": "special_bonus_unique_keeper_of_the_light_14",
        "level": 3
      },
      {
        "name": "special_bonus_unique_keeper_of_the_light_10",
        "level": 4
      },
      {
        "name": "special_bonus_unique_keeper_of_the_light",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_wisp": {
    "abilities": [
      "wisp_tether",
      "wisp_spirits",
      "wisp_overcharge",
      "wisp_spirits_in",
      "wisp_spirits_out",
      "wisp_relocate",
      "wisp_tether_break"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_wisp_11",
        "level": 1
      },
      {
        "name": "special_bonus_unique_wisp_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_wisp_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_wisp",
        "level": 2
      },
      {
        "name": "special_bonus_unique_wisp_10",
        "level": 3
      },
      {
        "name": "special_bonus_unique_wisp_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_wisp_9",
        "level": 4
      },
      {
        "name": "special_bonus_unique_wisp_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_visage": {
    "abilities": [
      "visage_grave_chill",
      "visage_soul_assumption",
      "visage_gravekeepers_cloak",
      "visage_stone_form_self_cast",
      "visage_silent_as_the_grave",
      "visage_summon_familiars",
      "visage_summon_familiars_stone_form"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_visage_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_visage_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_visage_1",
        "level": 2
      },
      {
        "name": "special_bonus_unique_visage_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_visage_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_visage_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_visage_5",
        "level": 4
      },
      {
        "name": "special_bonus_unique_visage_6",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_slark": {
    "abilities": [
      "slark_dark_pact",
      "slark_pounce",
      "slark_essence_shift",
      "slark_depth_shroud",
      "generic_hidden",
      "slark_shadow_dance"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_slark_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_slark",
        "level": 1
      },
      {
        "name": "special_bonus_unique_slark_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_slark_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_slark_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_slark_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_slark_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_slark_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_medusa": {
    "abilities": [
      "medusa_split_shot",
      "medusa_mystic_snake",
      "medusa_mana_shield",
      "medusa_cold_blooded",
      "generic_hidden",
      "medusa_stone_gaze"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_medusa_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_medusa_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_medusa_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_medusa_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_medusa_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_medusa",
        "level": 3
      },
      {
        "name": "special_bonus_unique_medusa_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_medusa_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_troll_warlord": {
    "abilities": [
      "troll_warlord_berserkers_rage",
      "troll_warlord_whirling_axes_ranged",
      "troll_warlord_whirling_axes_melee",
      "troll_warlord_fervor",
      "troll_warlord_rampage",
      "troll_warlord_battle_trance"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_troll_warlord_whirling_axes_debuff_duration",
        "level": 1
      },
      {
        "name": "special_bonus_unique_troll_warlord_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_troll_warlord_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_troll_warlord_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_troll_warlord_battle_trance_movespeed",
        "level": 3
      },
      {
        "name": "special_bonus_unique_troll_warlord",
        "level": 3
      },
      {
        "name": "special_bonus_unique_troll_warlord_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_troll_warlord_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_centaur": {
    "abilities": [
      "centaur_hoof_stomp",
      "centaur_double_edge",
      "centaur_return",
      "centaur_mount",
      "generic_hidden",
      "centaur_stampede"
    ],
    "talents": [
      {
        "name": "special_bonus_hp_regen_5",
        "level": 1
      },
      {
        "name": "special_bonus_movement_speed_20",
        "level": 1
      },
      {
        "name": "special_bonus_strength_15",
        "level": 2
      },
      {
        "name": "special_bonus_unique_centaur_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_centaur_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_centaur_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_centaur_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_centaur_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_magnataur": {
    "abilities": [
      "magnataur_shockwave",
      "magnataur_empower",
      "magnataur_skewer",
      "magnataur_horn_toss",
      "generic_hidden",
      "magnataur_reverse_polarity"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_magnus_4",
        "level": 1
      },
      {
        "name": "special_bonus_unique_magnus_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_magnus_reverse_polarity_stats",
        "level": 2
      },
      {
        "name": "special_bonus_unique_magnus_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_magnus",
        "level": 3
      },
      {
        "name": "special_bonus_unique_magnus_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_magnus_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_magnus_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_shredder": {
    "abilities": [
      "shredder_whirling_death",
      "shredder_timber_chain",
      "shredder_reactive_armor",
      "shredder_chakram_2",
      "shredder_flamethrower",
      "shredder_chakram",
      "shredder_return_chakram",
      "shredder_return_chakram_2"
    ],
    "talents": [
      {
        "name": "special_bonus_hp_200",
        "level": 1
      },
      {
        "name": "special_bonus_mp_regen_150",
        "level": 1
      },
      {
        "name": "special_bonus_spell_amplify_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_timbersaw_2",
        "level": 2
      },
      {
        "name": "special_bonus_magic_resistance_20",
        "level": 3
      },
      {
        "name": "special_bonus_unique_timbersaw_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_timbersaw",
        "level": 4
      },
      {
        "name": "special_bonus_unique_timbersaw_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_bristleback": {
    "abilities": [
      "bristleback_viscous_nasal_goo",
      "bristleback_quill_spray",
      "bristleback_bristleback",
      "bristleback_hairball",
      "generic_hidden",
      "bristleback_warpath"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_damage_15",
        "level": 1
      },
      {
        "name": "special_bonus_mp_regen_150",
        "level": 1
      },
      {
        "name": "special_bonus_unique_bristleback_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_bristleback_6",
        "level": 2
      },
      {
        "name": "special_bonus_hp_regen_20",
        "level": 3
      },
      {
        "name": "special_bonus_unique_bristleback_2",
        "level": 3
      },
      {
        "name": "special_bonus_spell_lifesteal_12",
        "level": 4
      },
      {
        "name": "special_bonus_unique_bristleback_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_tusk": {
    "abilities": [
      "tusk_ice_shards",
      "tusk_snowball",
      "tusk_tag_team",
      "tusk_walrus_kick",
      "tusk_frozen_sigil",
      "tusk_walrus_punch",
      "tusk_launch_snowball"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_tusk_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_tusk_7",
        "level": 1
      },
      {
        "name": "special_bonus_hp_325",
        "level": 2
      },
      {
        "name": "special_bonus_unique_tusk_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_tusk_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_tusk",
        "level": 3
      },
      {
        "name": "special_bonus_unique_tusk_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_tusk_6",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_skywrath_mage": {
    "abilities": [
      "skywrath_mage_arcane_bolt",
      "skywrath_mage_concussive_shot",
      "skywrath_mage_ancient_seal",
      "skywrath_mage_shield_of_the_scion",
      "generic_hidden",
      "skywrath_mage_mystic_flare"
    ],
    "talents": [
      {
        "name": "special_bonus_hp_200",
        "level": 1
      },
      {
        "name": "special_bonus_intelligence_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_skywrath",
        "level": 2
      },
      {
        "name": "special_bonus_unique_skywrath_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_skywrath_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_skywrath_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_skywrath_6",
        "level": 4
      },
      {
        "name": "special_bonus_unique_skywrath_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_abaddon": {
    "abilities": [
      "abaddon_death_coil",
      "abaddon_aphotic_shield",
      "abaddon_frostmourne",
      "generic_hidden",
      "generic_hidden",
      "abaddon_borrowed_time"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_abaddon_6",
        "level": 1
      },
      {
        "name": "special_bonus_strength_8",
        "level": 1
      },
      {
        "name": "special_bonus_attack_damage_65",
        "level": 2
      },
      {
        "name": "special_bonus_unique_abaddon_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_abaddon",
        "level": 3
      },
      {
        "name": "special_bonus_unique_abaddon_immolation",
        "level": 3
      },
      {
        "name": "special_bonus_unique_abaddon_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_abaddon_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_elder_titan": {
    "abilities": [
      "elder_titan_echo_stomp",
      "elder_titan_ancestral_spirit",
      "elder_titan_natural_order",
      "elder_titan_move_spirit",
      "generic_hidden",
      "elder_titan_earth_splitter",
      "elder_titan_return_spirit"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_elder_titan_bonus_spirit_speed",
        "level": 1
      },
      {
        "name": "special_bonus_attack_speed_25",
        "level": 1
      },
      {
        "name": "special_bonus_unique_elder_titan_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_elder_titan",
        "level": 2
      },
      {
        "name": "special_bonus_cleave_100",
        "level": 3
      },
      {
        "name": "special_bonus_unique_elder_titan_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_elder_titan_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_elder_titan_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_legion_commander": {
    "abilities": [
      "legion_commander_overwhelming_odds",
      "legion_commander_press_the_attack",
      "legion_commander_moment_of_courage",
      "generic_hidden",
      "generic_hidden",
      "legion_commander_duel"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_legion_commander_9",
        "level": 1
      },
      {
        "name": "special_bonus_unique_legion_commander",
        "level": 1
      },
      {
        "name": "special_bonus_unique_legion_commander_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_legion_commander_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_legion_commander_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_legion_commander_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_legion_commander_7",
        "level": 4
      },
      {
        "name": "special_bonus_unique_legion_commander_8",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_ember_spirit": {
    "abilities": [
      "ember_spirit_searing_chains",
      "ember_spirit_sleight_of_fist",
      "ember_spirit_flame_guard",
      "ember_spirit_activate_fire_remnant",
      "generic_hidden",
      "ember_spirit_fire_remnant"
    ],
    "talents": [
      {
        "name": "special_bonus_attack_damage_12",
        "level": 1
      },
      {
        "name": "special_bonus_unique_ember_spirit_1",
        "level": 1
      },
      {
        "name": "special_bonus_unique_ember_spirit_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_ember_spirit_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_ember_spirit_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_ember_spirit_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_ember_spirit_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_ember_spirit_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_earth_spirit": {
    "abilities": [
      "earth_spirit_boulder_smash",
      "earth_spirit_rolling_boulder",
      "earth_spirit_geomagnetic_grip",
      "earth_spirit_stone_caller",
      "earth_spirit_petrify",
      "earth_spirit_magnetize"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_earth_spirit_4",
        "level": 1
      },
      {
        "name": "special_bonus_spell_amplify_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_earth_spirit_8",
        "level": 2
      },
      {
        "name": "special_bonus_unique_earth_spirit",
        "level": 2
      },
      {
        "name": "special_bonus_unique_earth_spirit_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_earth_spirit_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_earth_spirit_2",
        "level": 4
      },
      {
        "name": "special_bonus_unique_earth_spirit_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_terrorblade": {
    "abilities": [
      "terrorblade_reflection",
      "terrorblade_conjure_image",
      "terrorblade_metamorphosis",
      "terrorblade_demon_zeal",
      "terrorblade_terror_wave",
      "terrorblade_sunder"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_terrorblade_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_terrorblade_4",
        "level": 1
      },
      {
        "name": "special_bonus_hp_300",
        "level": 2
      },
      {
        "name": "special_bonus_unique_terrorblade_6",
        "level": 2
      },
      {
        "name": "special_bonus_all_stats_10",
        "level": 3
      },
      {
        "name": "special_bonus_unique_terrorblade_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_terrorblade",
        "level": 4
      },
      {
        "name": "special_bonus_unique_terrorblade_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_phoenix": {
    "abilities": [
      "phoenix_icarus_dive",
      "phoenix_fire_spirits",
      "phoenix_sun_ray",
      "phoenix_sun_ray_toggle_move",
      "generic_hidden",
      "phoenix_supernova",
      "phoenix_launch_fire_spirit",
      "phoenix_icarus_dive_stop",
      "phoenix_sun_ray_stop"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_phoenix_6",
        "level": 1
      },
      {
        "name": "special_bonus_spell_amplify_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_phoenix_3",
        "level": 2
      },
      {
        "name": "special_bonus_hp_500",
        "level": 2
      },
      {
        "name": "special_bonus_unique_phoenix_5",
        "level": 3
      },
      {
        "name": "special_bonus_unique_phoenix_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_phoenix_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_phoenix_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_oracle": {
    "abilities": [
      "oracle_fortunes_end",
      "oracle_fates_edict",
      "oracle_purifying_flames",
      "oracle_rain_of_destiny",
      "generic_hidden",
      "oracle_false_promise"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_oracle_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_oracle_9",
        "level": 1
      },
      {
        "name": "special_bonus_unique_oracle_fortunes_end_damage",
        "level": 2
      },
      {
        "name": "special_bonus_unique_oracle_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_oracle_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_oracle_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_oracle_7",
        "level": 4
      },
      {
        "name": "special_bonus_unique_oracle",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_techies": {
    "abilities": [
      "techies_sticky_bomb",
      "techies_reactive_tazer",
      "techies_suicide",
      "generic_hidden",
      "techies_minefield_sign",
      "techies_land_mines"
    ],
    "talents": [
      {
        "name": "special_bonus_magic_resistance_20",
        "level": 1
      },
      {
        "name": "special_bonus_unique_techies_3",
        "level": 1
      },
      {
        "name": "special_bonus_unique_techies",
        "level": 2
      },
      {
        "name": "special_bonus_mp_regen_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_techies_2",
        "level": 3
      },
      {
        "name": "special_bonus_unique_techies_5",
        "level": 3
      },
      {
        "name": "special_bonus_attack_damage_252",
        "level": 4
      },
      {
        "name": "special_bonus_unique_techies_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_winter_wyvern": {
    "abilities": [
      "winter_wyvern_arctic_burn",
      "winter_wyvern_splinter_blast",
      "winter_wyvern_cold_embrace",
      "generic_hidden",
      "generic_hidden",
      "winter_wyvern_winters_curse"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_winter_wyvern_5",
        "level": 1
      },
      {
        "name": "special_bonus_attack_damage_35",
        "level": 1
      },
      {
        "name": "special_bonus_unique_winter_wyvern_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_winter_wyvern_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_winter_wyvern_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_winter_wyvern_7",
        "level": 3
      },
      {
        "name": "special_bonus_unique_winter_wyvern_3",
        "level": 4
      },
      {
        "name": "special_bonus_unique_winter_wyvern_4",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_arc_warden": {
    "abilities": [
      "arc_warden_flux",
      "arc_warden_magnetic_field",
      "arc_warden_spark_wraith",
      "generic_hidden",
      "generic_hidden",
      "arc_warden_tempest_double"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_arc_warden_5",
        "level": 1
      },
      {
        "name": "special_bonus_hp_200",
        "level": 1
      },
      {
        "name": "special_bonus_unique_arc_warden_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_arc_warden_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_arc_warden",
        "level": 3
      },
      {
        "name": "special_bonus_unique_arc_warden_9",
        "level": 3
      },
      {
        "name": "special_bonus_unique_arc_warden_8",
        "level": 4
      },
      {
        "name": "special_bonus_unique_arc_warden_6",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_abyssal_underlord": {
    "abilities": [
      "abyssal_underlord_firestorm",
      "abyssal_underlord_pit_of_malice",
      "abyssal_underlord_atrophy_aura",
      "generic_hidden",
      "generic_hidden",
      "abyssal_underlord_dark_portal"
    ],
    "talents": [
      {
        "name": "special_bonus_armor_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_underlord_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_underlord_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_underlord_5",
        "level": 2
      },
      {
        "name": "special_bonus_unique_underlord_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_underlord_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_underlord",
        "level": 4
      },
      {
        "name": "special_bonus_unique_underlord_9",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_monkey_king": {
    "abilities": [
      "monkey_king_boundless_strike",
      "monkey_king_tree_dance",
      "monkey_king_primal_spring",
      "monkey_king_jingu_mastery",
      "monkey_king_mischief",
      "monkey_king_wukongs_command",
      "monkey_king_primal_spring_early",
      "monkey_king_untransform"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_monkey_king_12",
        "level": 1
      },
      {
        "name": "special_bonus_unique_monkey_king_9",
        "level": 1
      },
      {
        "name": "special_bonus_unique_monkey_king_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_monkey_king_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_monkey_king_8",
        "level": 3
      },
      {
        "name": "special_bonus_unique_monkey_king_10",
        "level": 3
      },
      {
        "name": "special_bonus_unique_monkey_king_11",
        "level": 4
      },
      {
        "name": "special_bonus_unique_monkey_king_6",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_pangolier": {
    "abilities": [
      "pangolier_swashbuckle",
      "pangolier_shield_crash",
      "pangolier_lucky_shot",
      "pangolier_rollup",
      "pangolier_rollup_stop",
      "pangolier_gyroshell",
      "pangolier_gyroshell_stop"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_pangolier_luckyshot_armor",
        "level": 1
      },
      {
        "name": "special_bonus_unique_pangolier",
        "level": 1
      },
      {
        "name": "special_bonus_unique_pangolier_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_pangolier_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_pangolier_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_pangolier_shield_crash_herostacks",
        "level": 3
      },
      {
        "name": "special_bonus_unique_pangolier_4",
        "level": 4
      },
      {
        "name": "special_bonus_unique_pangolier_5",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_dark_willow": {
    "abilities": [
      "dark_willow_bramble_maze",
      "dark_willow_shadow_realm",
      "dark_willow_cursed_crown",
      "dark_willow_bedlam",
      "generic_hidden",
      "dark_willow_terrorize"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_dark_willow_6",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dark_willow_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dark_willow_4",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dark_willow_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dark_willow_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dark_willow_3",
        "level": 3
      },
      {
        "name": "special_bonus_attack_speed_100",
        "level": 4
      },
      {
        "name": "special_bonus_unique_dark_willow_bedlam_targets",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_grimstroke": {
    "abilities": [
      "grimstroke_dark_artistry",
      "grimstroke_ink_creature",
      "grimstroke_spirit_walk",
      "grimstroke_dark_portrait",
      "generic_hidden",
      "grimstroke_soul_chain"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_grimstroke_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_grimstroke_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_grimstroke_soul_chain_reflect_damage",
        "level": 2
      },
      {
        "name": "special_bonus_unique_grimstroke_6",
        "level": 2
      },
      {
        "name": "special_bonus_unique_grimstroke_3",
        "level": 3
      },
      {
        "name": "special_bonus_unique_grimstroke_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_grimstroke_1",
        "level": 4
      },
      {
        "name": "special_bonus_unique_grimstroke_2",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_mars": {
    "abilities": [
      "mars_spear",
      "mars_gods_rebuke",
      "mars_bulwark",
      "generic_hidden",
      "generic_hidden",
      "mars_arena_of_blood"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_mars_rebuke_radius",
        "level": 1
      },
      {
        "name": "special_bonus_unique_mars_bulwark_redirect_chance",
        "level": 1
      },
      {
        "name": "special_bonus_unique_mars_rebuke_cooldown",
        "level": 2
      },
      {
        "name": "special_bonus_unique_mars_spear_bonus_damage",
        "level": 2
      },
      {
        "name": "special_bonus_unique_mars_bulwark_damage_reduction",
        "level": 3
      },
      {
        "name": "special_bonus_unique_mars_spear_stun_duration",
        "level": 3
      },
      {
        "name": "special_bonus_unique_mars_gods_rebuke_extra_crit",
        "level": 4
      },
      {
        "name": "special_bonus_unique_mars_arena_of_blood_hp_regen",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_void_spirit": {
    "abilities": [
      "void_spirit_aether_remnant",
      "void_spirit_dissimilate",
      "void_spirit_resonant_pulse",
      "generic_hidden",
      "generic_hidden",
      "void_spirit_astral_step"
    ],
    "talents": [
      {
        "name": "special_bonus_mp_regen_175",
        "level": 1
      },
      {
        "name": "special_bonus_unique_void_spirit_2",
        "level": 1
      },
      {
        "name": "special_bonus_unique_void_spirit_7",
        "level": 2
      },
      {
        "name": "special_bonus_unique_void_spirit_dissimilate_outerring",
        "level": 2
      },
      {
        "name": "special_bonus_unique_void_spirit_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_void_spirit_1",
        "level": 3
      },
      {
        "name": "special_bonus_unique_void_spirit_8",
        "level": 4
      },
      {
        "name": "special_bonus_unique_void_spirit_3",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_snapfire": {
    "abilities": [
      "snapfire_scatterblast",
      "snapfire_firesnap_cookie",
      "snapfire_lil_shredder",
      "snapfire_gobble_up",
      "snapfire_spit_creep",
      "snapfire_mortimer_kisses"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_snapfire_7",
        "level": 1
      },
      {
        "name": "special_bonus_unique_snapfire_5",
        "level": 1
      },
      {
        "name": "special_bonus_unique_snapfire_2",
        "level": 2
      },
      {
        "name": "special_bonus_unique_snapfire_3",
        "level": 2
      },
      {
        "name": "special_bonus_unique_snapfire_6",
        "level": 3
      },
      {
        "name": "special_bonus_unique_snapfire_mortimer_kisses_impact_damage",
        "level": 3
      },
      {
        "name": "special_bonus_unique_snapfire_8",
        "level": 4
      },
      {
        "name": "special_bonus_unique_snapfire_1",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_hoodwink": {
    "abilities": [
      "hoodwink_acorn_shot",
      "hoodwink_bushwhack",
      "hoodwink_scurry",
      "hoodwink_decoy",
      "hoodwink_hunters_boomerang",
      "hoodwink_sharpshooter",
      "hoodwink_sharpshooter_release"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_hoodwink_scurry_evasion",
        "level": 1
      },
      {
        "name": "special_bonus_unique_hoodwink_bushwhack_cooldown",
        "level": 1
      },
      {
        "name": "special_bonus_unique_hoodwink_bushwhack_damage",
        "level": 2
      },
      {
        "name": "special_bonus_unique_hoodwink_acorn_shot_bounces",
        "level": 2
      },
      {
        "name": "special_bonus_unique_hoodwink_sharpshooter_speed",
        "level": 3
      },
      {
        "name": "special_bonus_corruption_4",
        "level": 3
      },
      {
        "name": "special_bonus_unique_hoodwink_acorn_shot_charges",
        "level": 4
      },
      {
        "name": "special_bonus_unique_hoodwink_bushwhack_radius",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_dawnbreaker": {
    "abilities": [
      "dawnbreaker_fire_wreath",
      "dawnbreaker_celestial_hammer",
      "dawnbreaker_luminosity",
      "dawnbreaker_converge",
      "generic_hidden",
      "dawnbreaker_solar_guardian",
      "dawnbreaker_land"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_dawnbreaker_fire_wreath_swipe",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dawnbreaker_celestial_hammer_slow",
        "level": 1
      },
      {
        "name": "special_bonus_unique_dawnbreaker_luminosity_crit",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dawnbreaker_solar_guardian_cooldown",
        "level": 2
      },
      {
        "name": "special_bonus_unique_dawnbreaker_solar_guardian_radius",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dawnbreaker_luminosity_attack_count",
        "level": 3
      },
      {
        "name": "special_bonus_unique_dawnbreaker_fire_wreath_cooldown",
        "level": 4
      },
      {
        "name": "special_bonus_unique_dawnbreaker_celestial_hammer_cast_range",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_marci": {
    "abilities": [
      "marci_grapple",
      "marci_companion_run",
      "marci_guardian",
      "generic_hidden",
      "generic_hidden",
      "marci_unleash"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_marci_lunge_range",
        "level": 1
      },
      {
        "name": "special_bonus_unique_marci_grapple_damage",
        "level": 1
      },
      {
        "name": "special_bonus_unique_marci_guardian_lifesteal",
        "level": 2
      },
      {
        "name": "special_bonus_unique_marci_lunge_cooldown",
        "level": 2
      },
      {
        "name": "special_bonus_unique_marci_grapple_stun_duration",
        "level": 3
      },
      {
        "name": "special_bonus_unique_marci_unleash_speed",
        "level": 3
      },
      {
        "name": "special_bonus_unique_marci_dispose_range",
        "level": 4
      },
      {
        "name": "special_bonus_unique_marci_guardian_magic_immune",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_primal_beast": {
    "abilities": [
      "primal_beast_onslaught",
      "primal_beast_trample",
      "primal_beast_uproar",
      "primal_beast_rock_throw",
      "primal_beast_onslaught_release",
      "primal_beast_pulverize"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_primal_beast_onslaught_damage",
        "level": 1
      },
      {
        "name": "special_bonus_unique_primal_beast_trample_magic_resist",
        "level": 1
      },
      {
        "name": "special_bonus_unique_primal_beast_trample_cooldown",
        "level": 2
      },
      {
        "name": "special_bonus_unique_primal_beast_roar_dispells",
        "level": 2
      },
      {
        "name": "special_bonus_unique_primal_beast_trample_attack_damage",
        "level": 3
      },
      {
        "name": "special_bonus_unique_primal_beast_uproar_armor",
        "level": 3
      },
      {
        "name": "special_bonus_unique_primal_beast_trample_unslowable",
        "level": 4
      },
      {
        "name": "special_bonus_unique_primal_beast_pulverize_duration",
        "level": 4
      }
    ]
  },
  "npc_dota_hero_muerta": {
    "abilities": [
      "muerta_dead_shot",
      "muerta_the_calling",
      "muerta_gunslinger",
      "muerta_parting_shot",
      "generic_hidden",
      "muerta_pierce_the_veil",
      "generic_hidden",
      "generic_hidden",
      "generic_hidden"
    ],
    "talents": [
      {
        "name": "special_bonus_unique_muerta_dead_shot_damage",
        "level": 1
      },
      {
        "name": "special_bonus_strength_8",
        "level": 1
      },
      {
        "name": "special_bonus_unique_muerta_dead_shot_range",
        "level": 2
      },
      {
        "name": "special_bonus_attack_damage_35",
        "level": 2
      },
      {
        "name": "special_bonus_unique_muerta_dead_shot_charges",
        "level": 3
      },
      {
        "name": "special_bonus_unique_muerta_gunslinger_double_shot_chance",
        "level": 3
      },
      {
        "name": "special_bonus_unique_muerta_the_calling_num_revenants",
        "level": 4
      },
      {
        "name": "special_bonus_magic_resistance_25",
        "level": 4
      }
    ]
  }
}