function getEventCodeDictionary()
{
	return eventCodeDictionary;
}

var eventCodeDictionary = {"ASMC":"asm_routine", 
						//"BACG (load background)":"load_background",
						//"CMON (moving camera)":"stationary",
						//"CMOF (fixed camera)":"stationary",
						"CALL (call event)":"call", "JUMP":"jump",
						"CAM1 (focus view)":"focus_view",
						//"CHAI (change AI)":"change_ai", FIGURE OUT HOW TO USE SETVAL
						"CURE (remove cursor)":"remove_cursor",
						//"CURF (flash cursor)":"flash_cursor",
						"CUMO (move cursor)":"move_cursor",
						//"CUSI (change sides)":"change_sides", CONVERT TO CUSA CUSE CUSN
						"DISA (unit disappears)":"disappear",
						"ELSE (else condition)":"else",
						"ENIF (end an if/else condition)":"endif",
						"ENUN (stalls event)":"event_based_stall",
						"ENUT (trigger event ID)":"event_ids",
						"ENUF (reset event ID)":"event_ids",
						"FADI (fade into black)":"fade",
						"FADU (fade out of black)":"fade",
						"FAWI (fade into white)":"fade",
						"FAWU (fade out of white)":"fade",
						//"fade_set (fade in/out pair)":"fade_set",
						//"FADICG (fade into black for CGs)":"load_background",
						//"FADUCG (fade out of black for CGs)":"load_background",
						//"FIGH (scripted fight)":"fight", REPLACE WITH CMDS FIG1/FIG2
						//"FROMCGTOBG (CG to background)":"fade_from_cg_to_background",
						//"FROMBGTOCG (background to CG)":"fade_into_cg_from_background",
						//"FROMCGTOMAP (CG to map)":"fade_from_cg_to_map",
						"GameOver":"game_over",
						//"HIDEMAP":"hide_map",
						//"IFET (if an event has been triggered)":"if_event_triggered",
						//"IFEF (if an event has not been triggered)":"if_event_triggered",
						//"IFTU (if before turn X)":"if_before_turn_x",
						//"IFCA (if character is active)":"if_character_active",
						//"IFCNA (if character is not active)":"if_character_active",
						//"IFCD (if character is dead)":"if_character_dead",
						//"IFUF (if character is on map)":"if_character_on_map",
						//"IFYN (if 'yes' option was chosen)":"if_yes_chosen",
						//"IFNY (if 'no' option was chosen)":"if_yes_chosen",
						//"IFAT (if player phase)":"if_player_phase",
						//"IFAF (if not player phase)":"if_player_phase",
						//"IFAT (if lucky)":"if_lucky",
						//"IFAF (if not lucky)":"if_lucky",
						//"IFAT (if male tactician)":"if_male_tactician",
						//"IFAF (if female tactician)":"if_male_tactician",
						//"IFEM (if Eliwood mode)":"if_eliwood_mode",
						//"IFHM (if Hector mode)":"if_hector_mode",
						//"IFTT (if tutorial mode)":"if_tutorial_mode",
						//"ITGC (give item to character)":"give_to_specific_character", REPLACE WITH GIVEITEMTO
						//"ITGM (give item to main lord)":"give_to_main_lord", REPLACE WITH GIVEITEMTOMAIN
						//"ITGV (give item from village)":"give_to_active_character", REPLACE WITH GIVEITEMTO
						//"KILL":"kill",
						"LOMA (load map)":"load_map",
						//"LOU1 (load units)":"load_unit", REPLACE WITH LOAD1
						//"LynModeEnding":"end_lyn_mode",
						"MNCH (move to chapter X)":"move_to_next_chapter",
						//"MONE (give money)":"give_money",
						//"MORETEXT":"add_text", REPLACE WITH TEXTCONT
						//"MORETEXTIFEM (mode-based)":"add_mode_based_text",
						//"MORETEXTIFTACTF (tactician gender)":"add_gender_based_text",
						//"MORETEXTIFEVENTID (event-based)":"add_event_based_text",
						//"MORETEXTIFASM (asm-based)":"add_asm_based_text",
						//"MORETEXTCG (CG text)":"cg_convos",
						"MOVE (to location)":"move_to_location",
						//"MOVE (manual)":"manual_move",
						//"MOVENEXTTO":"move_next_to_character",
						//"MOVEMAINC (move main lord)":"move_main_lord",
						//"MUEN (fade out music)":"fade_out_music",
						"MUS1 (change music)":"change_music",
						"MUSI (lower volume)":"adjust_volume",
						"MUNO (regular volume)":"adjust_volume",
						//"NEVENTS (unskippable event)":"unskippable_event",
						//"NCONVO (unskippable text)":"regular_convos",
						//"QuintessenceEffect":"qunitessence_effect",
						"REMA (remove background/text)":"remove_background",
						//"REPA (unit reapears)":"reappear", REPLACE WITH REVEAL/RESUMM
						//"REPOS (reposition unit)":"reposition",
						//"RETB (remove textbox)":"remove_text",
						//"REBU (remove text bubbles)":"remove_text",
						//"SHCG (load CG)":"load_cg",
						//"SHOWMAP":"show_map",
						"SOUN (sound effect)":"sound",
						"STAL (stall events)":"time_based_stall",
						//"TEXTCG":"cg_convos",
						//"TEX1 (convo text)":"add_text", REPLACE WITH TEXTSTART/SHOW
						//"TEX6 (scroll)":"scroll",
						//"TEX6 (speech bubble)":"speech_bubble",
						//"TEX8 (small brown box)":"small_brown_box",
						//"TEXTIFEM (mode-based)":"add_mode_based_text",
						//"TEXTIFTACTF (tactician gender)":"add_gender_based_text",
						//"TEXTIFEVENTID (event-based)":"add_event_based_text",
						//"TEXTIFASM (asm-based)":"add_asm_based_text",
						//"TheEnd":"end_game",
						//"UNCM (change unit status)":"status",
						//"UNCR (reverse unit status)":"status",
						//"UnitClear (clear all units)":"clear_all_units", REPLACE WITH CLEA/CLEN/CLEE
						//"VCBF (black fog)":"fog_of_war",
						"VCWF (white fog)":"fog_of_war",
						//"WARP (in)":"warp_in", REPLACE WITH _WARP??
						//"WARP (out)":"warp_out",
						"WEA1 (set weather)":"set_weather"
						};	