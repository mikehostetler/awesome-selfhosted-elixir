# Awesome Self-Hosted Elixir [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of free and open-source applications that you can host yourself and whose server is written primarily in Elixir or has an important Elixir component.

This list records the source language of each application. It does not use only the run-time requirements. Thus, an Elixir application that is distributed only as a Docker image is still in scope.

## Contents

- [AI and Agents](#ai-and-agents)
- [Software Factories](#software-factories)
- [Agent Frameworks and Development Tools](#agent-frameworks-and-development-tools)
- [Analytics](#analytics)
- [Automation and Data](#automation-and-data)
- [Business and Collaboration](#business-and-collaboration)
- [Communication and Social](#communication-and-social)
- [Content Management and Publishing](#content-management-and-publishing)
- [Developer Tools](#developer-tools)
- [Education](#education)
- [Games](#games)
- [Infrastructure and Operations](#infrastructure-and-operations)
- [Media and Personal](#media-and-personal)

## AI and Agents

- [AlexClaw](https://github.com/thatsme/AlexClaw) - Personal AI agent with workflows, memory, local-model support, and chat-platform control. `Apache-2.0`.
- [Ankole](https://github.com/AgentBull/ankole) - AI workforce and agent operating system with durable execution and an operator console. `Apache-2.0`.
- [Fermix](https://github.com/tezra-io/fermix) - Local personal-agent daemon with browser setup, plugins, memory, and chat-platform connections. `MIT`.
- [Glorbo](https://github.com/foobarto/glorbo) - Agent orchestration platform with Linux sandboxes, approvals, audit records, memory, and a LiveView dashboard. `MIT OR Apache-2.0`.
- [Long](https://github.com/mjason/long) - LAN-first LLM agent runtime with a web interface, memory, scheduled tasks, and platform bots. `MIT`.
- [OSA](https://github.com/Miosa-osa/OSA) - Local coding and general-purpose agent with a terminal interface, tools, memory, MCP, sandboxes, and subagents. `Apache-2.0`.
- [Pepe](https://github.com/pepe-agent/pepe) - Agent runtime with a CLI, LiveView dashboard, APIs, tools, skills, delegation, and chat-platform connections. `MIT`.
- [Shem](https://github.com/thephilip/shem) - Agent platform with a flight recorder, time-travel debugger, tool packs, TUI, and web interface. `Apache-2.0`.
- [Vibe](https://github.com/elixir-vibe/vibe) - Local coding agent with a TUI, LiveView console, tools, memory, plugins, and subagents. `MIT`.
- [ZAQ](https://github.com/www-zaq-ai/zaq) - Collaborative agent operating system with workflows, tools, MCP connections, knowledge management, and a LiveView control panel. `AGPL-3.0`.

### Agent Platforms With License Warnings

The projects in this subsection are included for discovery. They do not meet the main list's OSI-license requirement. A missing license normally means that the source is all rights reserved, even when its repository is public.

- [Buster Claw](https://github.com/hightowerbuilds/buster-claw) - Desktop command, memory, browser, integration, and audit surface for external coding agents. `PolyForm-Shield-1.0.0`; not OSI-approved.
- [Codex Pooler](https://github.com/icoretech/codex-pooler) - Self-hosted Codex gateway with team accounts, API keys, sessions, and an operator dashboard. `Elastic-2.0`; not OSI-approved.
- [CYFR](https://github.com/cyfrworks/cyfr) - Self-hosted policy, sandbox, permission, and execution control plane for AI agents. The core uses `Apache-2.0`, and the Sanctum subsystem uses `FSL-1.1-Apache-2.0`, which is not OSI-approved until its future conversion.
- [Frontman](https://github.com/frontman-ai/frontman) - Browser-attached AI coding agent that uses live application context to edit source files and preview changes. The server uses `AGPL-3.0-only` with additional AI-use restrictions that are not OSI-approved; client libraries use `Apache-2.0`.
- [JidoBuilder](https://github.com/TMDLRG/JidoBuilder) - Visual console for building, configuring, deploying, and monitoring Jido agents. `PolyForm-Noncommercial-1.0.0`; not OSI-approved.
- [jido-conductor](https://github.com/jmanhype/jido-conductor) - Early desktop interface for managing and orchestrating Jido agents. **The README states MIT, but the repository has no license file.**
- [Neoharness](https://github.com/Neofox/neoharness) - Personal-agent runtime with tools, memory, schedules, chat connections, and a LiveView interface. **No license is stated.**

## Software Factories

Software factories turn goals, tickets, or specifications into tested code changes and pull requests. They add orchestration, isolated workspaces, approvals, and verification around coding agents.

- [Camelot](https://github.com/T0ha/camelot) - Self-hosted Kanban control plane for assigning approved tasks to Codex and Claude Code agents. `GPL-2.0`.
- [ControlKeel](https://github.com/aryaminus/controlkeel) - Control plane for policy gates, findings, proofs, and evaluations in AI-assisted software development. `Apache-2.0`.
- [Genesis](https://github.com/EMI-Group/genesis) - Desktop system for long-running autonomous software development and transformation. `AGPL-3.0`.
- [Hive](https://github.com/tuist/hive) - Agentic product-development system with GitHub and Slack integration. `MPL-2.0`.
- [Loomkin](https://github.com/pass-agent/loomkin) - Multi-agent development workspace with persistent decision memory, approvals, skills, and a LiveView mission-control interface. `MIT`.
- [Loopyard](https://github.com/loopyard/loopyard) - Multiplayer software factory with isolated Docker workspaces, concurrent coding agents, shared terminals, and durable review decisions. `AGPL-3.0-or-later`.
- [Maestro](https://github.com/joosure/Maestro) - Task-driven engineering platform for Codex, Claude Code, CodeBuddy Code, and OpenCode. `AGPL-3.0-only`.
- [Pixir](https://github.com/Ranvier-Technologies/pixir) - Coding-agent runtime for supervised subagents, workflows, tool execution, and replayable evidence logs. `MIT`.
- [Shep](https://github.com/craigruks/shep) - Worktree-based orchestrator that turns labeled GitHub issues into CI-verified pull requests. `MIT`.
- [Symphony](https://github.com/openai/symphony) - Experimental system for running coding agents from project tasks and verifying their work. `Apache-2.0`.

### Software Factories With License Warnings

The projects in this subsection are included for discovery. They do not meet the main list's OSI-license requirement.

- [Agent Harness](https://github.com/nyelbangash/agent-harness) - Always-on coding-agent system with a LiveView mission-control dashboard, safety controls, and GitHub issue automation. **No license is stated.**
- [Codrift](https://github.com/filipecabaco/codrift) - Desktop and MCP control panel for agent initiatives, worktrees, shared memory, and integrations. **The README states MIT, but the repository has no license file.**
- [Conductor](https://github.com/dangeranger/conductor) - Coding-agent harness that turns Linear issues into isolated Codex workspaces with an optional LiveView dashboard. **No license is stated.**
- [Svärm](https://github.com/svarm-dev/svarm) - Self-hosted coding-agent control plane for tickets, approvals, and run costs. `FSL-1.1-MIT`; not OSI-approved until its future conversion.

## Agent Frameworks and Development Tools

These projects are libraries, embeddable interfaces, and development tools. They are not standalone self-hosted applications.

- [Jido](https://github.com/agentjido/jido) - Distributed autonomous-agent framework with signals, actions, workflows, and OTP-native execution. `Apache-2.0`.
- [Agens](https://github.com/jessedrelick/agens) - OTP components for reliable multi-agent LLM workflows. `Apache-2.0`.
- [AgentForge](https://github.com/i365dev/agent_forge) - Signal-driven workflow framework for intelligent and adaptive systems. `MIT`.
- [Alloy](https://github.com/alloy-ex/alloy) - Model-independent agent harness for Elixir applications. `MIT`.
- [Avalon](https://github.com/elixir-avalon/avalon) - Standardization framework for agentic workflows in Elixir. `Apache-2.0`.
- [BeamWeaver](https://github.com/caudena/beam_weaver) - Framework for traceable agents, graph workflows, tools, memory, approvals, and streaming. `Apache-2.0`.
- [Cantrip](https://github.com/deepfates/cantrip) - Extensible multi-agent environment with delegation, gates, storage, and sandbox options. `MIT`.
- [Condukt](https://github.com/tuist/condukt) - Library and standalone engine for agentic workflows, tools, and sandboxed execution. `MIT`.
- [ElGraph](https://github.com/showjihyun/ElGraph) - Graph-first agent framework with durable execution, approvals, checkpoints, MCP, and an observability interface. `MIT`.
- [Jido Studio](https://github.com/agentjido/jido_studio) - Embeddable LiveView dashboard for managing and debugging Jido agents. `Apache-2.0`.
- [LangChain for Elixir](https://github.com/brainlid/langchain) - Framework for adding LLMs, tools, chains, and agents to Elixir applications. `Apache-2.0`.
- [Legion](https://github.com/software-mansion-labs/legion) - Runtime-agent framework with tool modules, agent delegation, approvals, persistence, and sandboxes. `MIT`.
- [LegionWeb](https://github.com/software-mansion-labs/legion_web) - Embeddable LiveView dashboard for Legion agent activity and execution traces. `MIT`.
- [Lemon](https://github.com/z80dev/lemon) - BEAM-native agent platform with pluggable engines, channels, memory, tools, and a reference runtime. `MIT`.
- [LLMAgent](https://github.com/i365dev/llm_agent) - Abstraction for domain-specific LLM agents built on AgentForge. `MIT`.
- [Nous](https://github.com/nyo16/nous) - Agent framework with multiple model providers, tools, memory, workflows, teams, approvals, and LiveView integration. `Apache-2.0`.
- [Sagents](https://github.com/sagents-ai/sagents) - Interactive-agent framework with OTP supervision, approvals, subagents, and LiveView integration. `Apache-2.0`.
- [Synapse](https://github.com/nshkrdotcom/synapse) - Headless multi-agent orchestration framework with signals, workflows, persistence, and audit records. `MIT`.

## Analytics

- [Plausible Analytics](https://github.com/plausible/analytics) - Privacy-focused web analytics without cookies. `AGPL-3.0`.

## Automation and Data

- [Lightning](https://github.com/OpenFn/lightning) - Workflow automation and data integration platform from OpenFn. `LGPL-3.0`.
- [Sequin](https://github.com/sequinstream/sequin) - PostgreSQL change-data capture for streams, queues, search indexes, and webhooks. `MIT`.
- [Supabase Realtime](https://github.com/supabase/realtime) - WebSocket server for PostgreSQL changes, broadcast messages, and presence. `Apache-2.0`.

## Business and Collaboration

- [Accent](https://github.com/mirego/accent) - Translation management for software teams. `BSD-3-Clause`.
- [Claper](https://github.com/ClaperCo/Claper) - Live audience questions, polls, and presentations. `AGPL-3.0`.
- [Craftplan](https://github.com/puemos/craftplan) - Order, inventory, and production management for small manufacturing businesses. `AGPL-3.0`.
- [Mindwendel](https://github.com/b310-digital/mindwendel) - Collaborative brainstorming and idea prioritization. `AGPL-3.0`.
- [nyght](https://gitlab.com/nyght/nyght) - Event, staff, ticket, and schedule management for music venues. `AGPL-3.0-only`.
- [Operately](https://github.com/operately/operately) - Company goals, projects, and operating processes. The core uses Apache-2.0, and optional enterprise files use a separate license. `Apache-2.0`.
- [Tymeslot](https://github.com/Tymeslot/tymeslot) - Meeting scheduling with booking pages and calendar synchronization. `AGPL-3.0`.
- [Wraft](https://github.com/wraft/wraft) - Document lifecycle management and structured document generation. `AGPL-3.0`.

## Communication and Social

- [Akkoma](https://akkoma.dev/AkkomaGang/akkoma) - Federated microblogging server compatible with ActivityPub. `AGPL-3.0`.
- [Baudrate](https://github.com/hiroshiyui/baudrate) - ActivityPub-enabled bulletin board system with threaded discussions and moderation. `AGPL-3.0`.
- [BBoard](https://codeberg.org/fungal/bboard) - Forum and bulletin board with a production release and system service configuration. `EUPL-1.2`.
- [Bonfire](https://github.com/bonfire-networks/bonfire-app) - Modular federated social and community platform. `AGPL-3.0`.
- [Comcent CE](https://github.com/comcent-io/comcent-ce) - Voice contact center with browser calling, queues, recordings, transcripts, and webhooks. `AGPL-3.0`.
- [Foglet BBS](https://github.com/bmanturner/foglet-bbs) - SSH-first bulletin board system with forums, chat rooms, mail, and door games. `Apache-2.0`.
- [Inkwell](https://github.com/stantondev/inkwell) - Federated social journaling and community platform based on ActivityPub. `AGPL-3.0`.
- [Kammer](https://github.com/tskovlund/kammer) - Community platform for associations, clubs, and other real-world groups. `AGPL-3.0`.
- [Kazarma](https://gitlab.com/technostructures/kazarma/kazarma) - Bridge for communication between Matrix and ActivityPub networks. `AGPL-3.0-only`.
- [Keila](https://github.com/pentacent/keila) - Newsletter creation and email campaign management. `AGPL-3.0`.
- [Lanyard](https://github.com/Phineas/lanyard) - REST and WebSocket service for Discord presence data. `MIT`.
- [linkhut](https://git.sr.ht/~mlb/linkhut) - Social bookmarking service with imports, exports, feeds, and an API. `AGPL-3.0`.
- [LIV](https://github.com/derek-zhou/liv) - Webmail designed for use on your own email server. `AGPL-3.0`.
- [Mobilizon](https://framagit.org/kaihuri/mobilizon) - Federated event and group management platform. `AGPL-3.0`.
- [Myconet](https://codeberg.org/myconet/myconet) - ActivityPub social network designed for users to own and host their data. `EUPL-1.2`.
- [Philomena](https://github.com/philomena-dev/philomena) - Imageboard platform for organizing, discussing, and sharing images. `AGPL-3.0`.
- [Pleroma](https://git.pleroma.social/pleroma/pleroma) - Lightweight federated microblogging server compatible with ActivityPub. `AGPL-3.0`.
- [vutuv](https://github.com/wintermeyer/vutuv) - Federated professional social network. `MIT`.

### Communication and Social With License Warnings

The projects in this subsection are included for discovery. They do not meet the main list's OSI-license requirement.

- [Soundbored](https://github.com/christomitov/soundbored) - Self-hosted Discord soundboard with sound uploads, browser playback controls, voice-channel automation, and an authenticated API. **No license is stated.**

## Content Management and Publishing

- [AlchemyPub](https://codeberg.org/j4nk/alchemy_pub) - Server-side Markdown publishing and presentation application. `Apache-2.0`.
- [Nivose](https://codeberg.org/Nivose/nivose) - Content management system with Docker Compose and release deployment options. `AGPL-3.0`.

## Developer Tools

- [asciinema server](https://github.com/asciinema/asciinema-server) - Platform for hosting and sharing terminal session recordings. `Apache-2.0`.
- [Azimutt](https://github.com/azimuttapp/azimutt) - Database schema exploration, documentation, and analysis. `MIT`.
- [Code::Stats](https://gitlab.com/code-stats/code-stats) - Programming activity and experience-point tracking service. `BSD-3-Clause`.
- [GitBlixt](https://gitblixt.com/gitblixt/gitblixt) - Git hosting and collaboration forge built with Phoenix LiveView. `AGPL-3.0`.
- [Harpoon](https://github.com/aschiavon91/harpoon) - Webhook receiver and request inspector. `MIT`.
- [Livebook](https://github.com/livebook-dev/livebook) - Collaborative notebooks for code, data, automation, and machine learning. `Apache-2.0`.
- [Notesclub](https://github.com/notesclub/notesclub) - Discovery and indexing service for public Livebook notebooks. `MIT`.
- [OpenCov](https://github.com/danhper/opencov) - Test-coverage history viewer. `MIT`.
- [RawPair](https://github.com/rawpair/rawpair) - Collaborative development environment with shared terminals and code editors. `MPL-2.0`.
- [Remit](https://github.com/barsoom/ex-remit) - Commit-by-commit code review application. `MIT`.
- [Semaphore](https://github.com/semaphoreio/semaphore) - Continuous integration and delivery platform. The Community Edition core uses Apache-2.0, and files under `ee/` use a separate commercial license. `Apache-2.0`.
- [Share a Secret](https://github.com/Flo0807/share-a-secret) - One-time secret sharing with expiration controls and a self-hosted web interface. `Apache-2.0`.

## Education

- [Listudy](https://github.com/ArneVogel/listudy) - Chess training platform for openings, tactics, and spaced repetition. `AGPL-3.0`.
- [OLI Torus](https://github.com/Simon-Initiative/oli-torus) - Course authoring and delivery platform with learning activities and analytics. `MIT`.

## Games

- [Codebattle](https://github.com/hexlet-codebattle/codebattle) - Multiplayer programming game with tournaments and algorithm challenges. `AGPL-3.0`.
- [Wanderer](https://github.com/wanderer-industries/wanderer) - Mapping and collaboration tool for EVE Online. `MIT`.

## Infrastructure and Operations

- [AetherS3](https://github.com/wizenink/aethers3) - Distributed S3-compatible object store that runs on the BEAM. `MIT`.
- [Astarte](https://github.com/astarte-platform/astarte) - IoT platform for device management, data collection, and application integration. `Apache-2.0`.
- [Boruta Server](https://github.com/malach-it/boruta-server) - OAuth, OpenID Connect, and identity management server. `Apache-2.0`.
- [ExTracker](https://github.com/Dahrkael/ExTracker) - BitTorrent tracker with Docker and Elixir release deployment options. `Apache-2.0`.
- [FlyingDdns](https://gitlab.com/timopallach/FlyingDdns) - Dynamic DNS service for PowerDNS with a web interface and API. `BSD-2-Clause`.
- [Health](https://codeberg.org/ppatrzyk/health) - Infrastructure and cron-job monitor with container and release deployment options. `AGPL-3.0`.
- [Logflare](https://github.com/Logflare/logflare) - Structured log ingestion, search, browser tailing, and OpenTelemetry service. `Apache-2.0`.
- [Lynx](https://github.com/Clivern/Lynx) - Remote state backend for Terraform. `MIT`.
- [NervesHub](https://github.com/nerves-hub/nerves_hub_web) - Firmware, update, and device-fleet management for Nerves devices. `Apache-2.0`.
- [OCSF Schema Server](https://github.com/ocsf/ocsf-server) - Web server for browsing and working with Open Cybersecurity Schema Framework schemas. `Apache-2.0`.
- [Osmotic](https://github.com/ReifiedException/osmotic) - AI gateway for keys, quotas, spend controls, data protection, and audit records. `BSD-2-Clause`.
- [Plural Console](https://github.com/pluralsh/console) - Kubernetes fleet-management control plane for GitOps, infrastructure-as-code automation, pull-request workflows, notifications, and AI-assisted operations. `AGPL-3.0` source; vendor-built binaries use `MIT`, and a Plural license is required.
- [Poxa](https://github.com/edgurgel/poxa) - Standalone Pusher-compatible server for real-time applications. `MIT`.
- [Runhyve Webapp](https://gitlab.com/runhyve/webapp) - Management interface for Runhyve hypervisors and virtual machines. `BSD-2-Clause`.
- [ServiceRadar](https://code.carverauto.dev/carverauto/serviceradar) - Network management, monitoring, and security analytics. `Apache-2.0`.

## Media and Personal

- [Ambry](https://github.com/ambry-app/ambry) - Personal audiobook library and streaming server. `MIT`.
- [Atlas](https://github.com/dawarich-app/atlas) - Local-first offline map server based on OpenStreetMap data. `AGPL-3.0`.
- [Cannery](https://codeberg.org/shibao/cannery) - Firearm and ammunition inventory management application. `AGPL-3.0-or-later`.
- [Charsh](https://gitlab.com/owni.dev/charsh) - Detailed reference-sheet manager for fictional characters. `Apache-2.0`.
- [Domovik](https://github.com/domovikapp/domovik-server) - End-to-end encrypted synchronization for browser tabs, bookmarks, and reading lists. `AGPL-3.0`.
- [Hacker News frontend](https://codeberg.org/jorams/hacker-news) - Mobile-focused alternative web interface for Hacker News. `EUPL-1.2`.
- [HydraSRT](https://github.com/streamband/hydra-srt) - Gateway for routing and managing SRT, UDP, and RTP video streams. `Apache-2.0`.
- [Midarr](https://github.com/midarrlabs/midarr-server) - Lightweight media server for video libraries. `MIT`.
- [Mydia](https://github.com/getmydia/mydia) - Movie and television library management platform. `AGPL-3.0`.
- [Pinchflat](https://github.com/kieraneglin/pinchflat) - YouTube media manager and downloader based on yt-dlp. `AGPL-3.0`.
- [PodSync](https://codeberg.org/jorams/pod-sync) - Single-user podcast synchronization server compatible with the Nextcloud GPodder Sync API. `EUPL-1.2`.
- [Revix](https://github.com/curt/revix) - Personal location journal with ActivityPub federation. `AGPL-3.0`.
- [TeslaMate](https://github.com/teslamate-org/teslamate) - Data logger and dashboard for Tesla vehicles. `AGPL-3.0`.
- [TRMNL BYOS Phoenix](https://github.com/usetrmnl/byos_phoenix) - Bring-your-own server for TRMNL e-paper display devices. `MIT`.

## Related Lists

- [Awesome Elixir](https://github.com/h4cc/awesome-elixir) - Elixir and Erlang libraries, tools, and resources.
- [Awesome Phoenix](https://github.com/droptheplot/awesome-phoenix) - Open-source applications made with Phoenix.
- [Awesome Phoenix LiveView](https://github.com/beam-community/awesome-phoenix-liveview) - LiveView repositories and learning resources.
- [Awesome Selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) - Free software network services and web applications.
- [Open Production Web Projects](https://github.com/sdil/open-production-web-projects) - Production web applications grouped by programming language.
- [Real World Phoenix](https://github.com/szTheory/real-world-phoenix) - Phoenix codebases for study.

## Contributing

Contributions are welcome. Read the [contribution guide](CONTRIBUTING.md) before you open an issue or pull request.
